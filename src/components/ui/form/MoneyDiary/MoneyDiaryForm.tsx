import { TextInput, NumberInput, Textarea, MultiSelect, Button, Checkbox } from "@mantine/core";
import { FC, useCallback } from "react";
import { DatePicker } from "@mantine/dates";
import { moneyDiaryForm } from "../../../../libs/mantine/useForm/moneyDiaryForm";
import { useMoneyDiary } from "../../../../hooks/useMoneyDiary";
import { MoneyDiaryDto } from "../../../../../api/@types";
import { store } from "../../../../libs/store";

type Props = {
  closeDrawer?: VoidFunction;
};

export const MoneyDiaryForm: FC<Props> = ({ closeDrawer }) => {
  const { form, onSubmit } = moneyDiaryForm();
  const { setMode, resetMoneyDiary, mode, moneyDiary } = store.moneyDiary();
  const { categories } = useMoneyDiary();
  const list = categories
    ? categories.map((category) => {
        return { value: category.id.toString(), label: category.name };
      })
    : [];

  const cancelEdit = useCallback(() => {
    setMode("NEW");
    resetMoneyDiary();
    closeDrawer && closeDrawer();
  }, [mode]);

  const onClickSubmit = useCallback(
    (moneyDiary: MoneyDiaryDto) => {
      onSubmit(moneyDiary);
      closeDrawer && closeDrawer();
    },
    [moneyDiary]
  );
  const cate = "payment";

  return (
    <form className="flex flex-col justify-center" onSubmit={form.onSubmit(onClickSubmit)}>
      <TextInput {...form.getInputProps("expenseItemName")} className=" mb-4 w-80" placeholder="費目名を入力" />
      <NumberInput
        {...form.getInputProps(cate)}
        hideControls
        className="mr-2 mb-4  w-80"
        placeholder={`出金額を入力`}
        maxLength={9}
      />
      {/* <div className="flex">
        <p className=" mt-1 mr-2 w-20">入金額</p>
        <NumberInput
          {...form.getInputProps("withdrawal")}
          hideControls
          className="mr-2 mb-4  w-80"
          placeholder={`入金額を入力`}
          maxLength={9}
        />
      </div> */}
      {/* <div className="flex">
        <p className="mt-1 mr-2 w-20">日付</p>
        <DatePicker
          inputFormat="YYYY/MM/DD"
          {...form.getInputProps("date")}
          className=" mb-4  w-80"
          placeholder="日付を選択"
        />
      </div> */}
      <MultiSelect
        dropdownPosition="top"
        data={list}
        className=" mb-4  w-80"
        placeholder="カテゴリを入力"
        searchable
        nothingFound="カテゴリが見つかりません"
        {...form.getInputProps("categories")}
      />
      <Textarea {...form.getInputProps("memo")} placeholder="メモを入力" className=" mb-4  w-80" />
      <Checkbox
        {...form.getInputProps("automaticRegistration")}
        size="md"
        defaultChecked={moneyDiary.automaticRegistration}
        className="ml-20 pl-2 mb-4"
        label="毎月登録する(1日に自動で登録されます)"
      />
      <div>
        <Button fullWidth type="submit" size="md" color="red">
          {mode === "EDIT" ? `編集完了` : "登録"}
        </Button>
        {mode !== "NEW" && (
          <Button onClick={cancelEdit} fullWidth size="md" className=" mt-2">
            {mode === "EDIT" ? "編集" : "複製"}をキャンセル
          </Button>
        )}
      </div>
    </form>
  );
};
