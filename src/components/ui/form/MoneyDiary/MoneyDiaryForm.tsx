import { TextInput, Radio, Textarea, MultiSelect, Button, Checkbox } from "@mantine/core";
import { FC, useCallback, useState } from "react";
import { DatePicker } from "@mantine/dates";
import { moneyDiaryForm } from "../../../../libs/mantine/useForm/moneyDiaryForm";
import { useMoneyDiary } from "../../../../hooks/useMoneyDiary";
import { MoneyDiaryDto } from "../../../../../api/@types";
import { store } from "../../../../libs/store";

type Props = {
  closeDrawer?: VoidFunction;
};

export const MoneyDiaryForm: FC<Props> = ({ closeDrawer }) => {
  const [isPayment, setIsPayment] = useState<"payment" | "withdrawal">("payment");
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
  const onChangeRadio = (value: "payment" | "withdrawal") => {
    setIsPayment(value);
    if (value === "payment") {
      form.setFieldValue("withdrawal", "");
    } else {
      form.setFieldValue("payment", "");
    }
  };

  return (
    <form className="flex h-96 flex-col justify-center ml-6 mr-6" onSubmit={form.onSubmit(onClickSubmit)}>
      <div className="flex">
        <TextInput {...form.getInputProps("expenseItemName")} className=" mb-4 w-80" placeholder="費目名を入力" />
        <DatePicker
          inputFormat="YYYY/MM/DD"
          {...form.getInputProps("date")}
          className=" ml-8 w-40"
          placeholder="日付を選択"
        />
      </div>
      <div className="flex">
        {isPayment === "payment" ? (
          <TextInput
            {...form.getInputProps("payment")}
            className="mr-2 mb-4  w-80"
            placeholder={`出金額を入力`}
            maxLength={9}
          />
        ) : (
          <TextInput
            {...form.getInputProps("withdrawal")}
            className="mr-2 mb-4  w-80"
            placeholder={`入金額を入力`}
            maxLength={9}
          />
        )}

        <Radio.Group defaultValue="payment" onChange={onChangeRadio} className=" ml-8" name="favoriteFramework">
          <Radio value="payment" label="出金" />
          <Radio value="withdrawal" label="入金" />
        </Radio.Group>
      </div>
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
        className="pl-2 mb-4"
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
