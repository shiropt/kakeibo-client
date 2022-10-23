import { TextInput, NumberInput, Textarea, MultiSelect, Button } from "@mantine/core";
import { FC } from "react";
import { DatePicker } from "@mantine/dates";
import { moneyDiaryForm } from "../../../../libs/mantine/useForm/moneyDiaryForm";
import { useMoneyDiaryStore } from "../../../../libs/store/moneyDiary";
import { useMoneyDiary } from "../../../../hooks/useMoneyDiary";

export const MoneyDiaryForm: FC = () => {
  const { form, onSubmit } = moneyDiaryForm();
  const { mode, setMode, resetMoneyDiary } = useMoneyDiaryStore();
  const cancelEdit = () => {
    setMode("NEW");
    resetMoneyDiary();
  };

  return (
    <form onSubmit={form.onSubmit(onSubmit)} className=" border-2 mt-4 mr-2 border-gray-100 p-4">
      <div className="flex">
        <p className=" mt-1 mr-2 w-20">費目名</p>
        <TextInput {...form.getInputProps("expenseItemName")} className=" mb-4 w-80" placeholder="費目名を入力" />
      </div>
      <div className="flex">
        <p className=" mt-1 mr-2 w-20">出金額</p>
        <NumberInput
          {...form.getInputProps("payment")}
          hideControls
          className="mr-2 mb-4  w-80"
          placeholder={`出金額を入力`}
          maxLength={9}
        />
      </div>
      <div className="flex">
        <p className=" mt-1 mr-2 w-20">入金額</p>
        <NumberInput
          {...form.getInputProps("withdrawal")}
          hideControls
          className="mr-2 mb-4  w-80"
          placeholder={`入金額を入力`}
          maxLength={9}
        />
      </div>

      <div className="flex">
        <p className="mt-1 mr-2 w-20">日付</p>
        <DatePicker
          inputFormat="YYYY/MM/DD"
          {...form.getInputProps("date")}
          className=" mb-4  w-80"
          placeholder="日付を選択"
        />
      </div>
      <div className=" flex">
        <p className=" mt-1 mr-2 w-20">カテゴリ</p>
        <MultiSelect
          data={[
            { value: "1", label: "食費" },
            { value: "2", label: "給与" },
            { value: "3", label: "家賃" },
            { value: "4", label: "貯金" },
            { value: "5", label: "臨時収入" },
            { value: "6", label: "交際費" },
          ]}
          className=" mb-4  w-80"
          placeholder="カテゴリを入力"
          searchable
          nothingFound="Nothing found"
          {...form.getInputProps("categories")}
        />
      </div>
      <div className=" flex">
        <p className=" mt-1 mr-2 w-20">メモ</p>
        <Textarea {...form.getInputProps("memo")} placeholder="メモを入力" className=" mb-4  w-80" />
      </div>
      <div>
        <Button type="submit" fullWidth size="md" color="red">
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
