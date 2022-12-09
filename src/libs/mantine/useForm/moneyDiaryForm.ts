import { moneyDiary } from "./../../store/moneyDiary";
import { useFetchers } from "./../../../hooks/useFetcher";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import { useMoneyDiary } from "../../../hooks/useMoneyDiary";
import { showNotification } from "@mantine/notifications";
import { useEffect, useState } from "react";
import { MoneyDiaryDto } from "../../../../api/@types";
import { store } from "../../store";

export const moneyDiaryForm = () => {
  const [openedDrawer, setOpenedDrawer] = useState(false);

  const { apiClient } = useFetchers();
  const { mutate } = useMoneyDiary();
  const { moneyDiary, mode, setMode, resetMoneyDiary } = store.moneyDiary();
  useEffect(() => {
    form.setValues({
      memo: moneyDiary.memo,
      withdrawal: moneyDiary.withdrawal,
      payment: moneyDiary.payment,
      date: moneyDiary.date,
      automaticRegistration: moneyDiary.automaticRegistration,
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
    automaticRegistration: z.boolean(),
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
    });
    form.reset();
    resetMoneyDiary();
    mutate();
    setMode("NEW");
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

  return { form, onSubmit, openedDrawer, setOpenedDrawer };
};
