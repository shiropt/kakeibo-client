import { MoneyDiaryGetResponse } from "./../../../../api/@types/index";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import { MoneyDiaryDto } from "../../../../api/@types";
import { apiClient } from "../../../hooks/useFetcher";
import { useMoneyDiary } from "../../../hooks/useMoneyDiary";
import { showNotification } from "@mantine/notifications";
import { useMoneyDiaryStore } from "../../store/moneyDiary";
import { useEffect } from "react";

export const moneyDiaryForm = () => {
  const { mutate } = useMoneyDiary();
  const { moneyDiary, mode, setMode, resetMoneyDiary } = useMoneyDiaryStore();
  useEffect(() => {
    form.setValues({
      memo: moneyDiary.memo,
      withdrawal: moneyDiary.withdrawal,
      payment: moneyDiary.payment,
      date: moneyDiary.date,
      period: moneyDiary.period,
      expenseItemName: moneyDiary.expenseItemName,
      categories: moneyDiary.categories,
    });
  }, [moneyDiary]);

  useEffect(() => {
    form.reset();
  }, [mode]);

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
    initialValues: moneyDiary,
  });

  const postMoneyDiary = async (data: MoneyDiaryDto) => {
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
    resetMoneyDiary();
    mutate();
    setMode("NEW");
    showNotification({
      title: `${data.date.getFullYear()}年${data.date.getMonth() + 1}月`,
      message: `${data.expenseItemName}を追加しました`,
    });
  };

  const putMoneyDiary = async (data: MoneyDiaryDto) => {
    await apiClient.money_diary._id(moneyDiary.id.toString()).$put({
      body: {
        ...data,
        categories: data.categories.map(Number),
        withdrawal: data.withdrawal || 0,
        payment: data.payment || 0,
      },
      headers: { userId: "1" },
    });
    form.reset();
    resetMoneyDiary();
    setMode("NEW");
    mutate();
    showNotification({
      title: `${data.date.getFullYear()}年${data.date.getMonth() + 1}月`,
      message: `${data.expenseItemName}を更新しました`,
    });
  };

  const onSubmit = (moneyDiary: MoneyDiaryDto) => {
    if (mode === "EDIT") {
      putMoneyDiary(moneyDiary);
    } else {
      postMoneyDiary(moneyDiary);
    }
  };

  return { form, onSubmit };
};
