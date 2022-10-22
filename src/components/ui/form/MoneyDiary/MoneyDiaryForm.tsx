import { TextInput, NumberInput, Textarea, MultiSelect, Button } from "@mantine/core";
import { FC } from "react";
import { DatePicker } from "@mantine/dates";
import { useForm, zodResolver } from "@mantine/form";
import { MoneyDiaryDto } from "../../../../../api/@types";
import { apiClient } from "../../../../hooks/useFetcher";
import { z } from "zod";
import { useMoneyDiary } from "../../../../hooks/useMoneyDiary";
import { showNotification } from "@mantine/notifications";

export const MoneyDiaryForm: FC = () => {
  const { mutate } = useMoneyDiary();

  const schema = z.object({
    memo: z.string().max(255),
    withdrawal: z.number().nullable(),
    payment: z.number().nullable(),
    date: z.date(),
    period: z.number(),
    expenseItemName: z
      .string()
      .min(1, { message: "費目名は必須です" })
      .max(255, { message: "費目名の最大入力文字数は255文字です" }),
    categories: z.array(z.string()),
  });
  const form = useForm<MoneyDiaryDto>({
    schema: zodResolver(schema),
    initialValues: {
      memo: "",
      withdrawal: 0,
      payment: 0,
      date: new Date(),
      period: 0,
      expenseItemName: "",
      categories: [],
    },
  });
  const submit = async (data: MoneyDiaryDto) => {
    await apiClient.money_diary.post({
      body: {
        ...data,
        categories: data.categories.map(Number),
        withdrawal: data.withdrawal || 0,
        payment: data.payment || 0,
      },
      headers: { userId: "1" },
    });
    form.reset();
    mutate();
    showNotification({
      title: `${data.date.getFullYear()}年${data.date.getMonth() + 1}月`,
      message: `${data.expenseItemName}を追加しました`,
    });
  };

  return (
    <form onSubmit={form.onSubmit(submit)} className=" border-2 mt-4 mr-2 border-gray-100 p-4">
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

      <div className=" flex">
        <p className=" mt-1 mr-2 w-20">日付</p>
        <DatePicker {...form.getInputProps("date")} className=" mb-4  w-80" placeholder="日付を選択" />
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
          登録
        </Button>
      </div>
    </form>
  );
};
