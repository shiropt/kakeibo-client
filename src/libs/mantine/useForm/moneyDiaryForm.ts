import { useFetchers } from "./../../../hooks/useFetcher";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import { useMoneyDiary } from "../../../hooks/useMoneyDiary";
import { showNotification } from "@mantine/notifications";
import { useCallback, useEffect, useState } from "react";
import { MoneyDiaryDto } from "../../../../api/@types";
import { store } from "../../store";

export const moneyDiaryForm = () => {
  const [openedDrawer, setOpenedDrawer] = useState(false);
  const { apiClient, handlingError } = useFetchers();
  const { mutate } = useMoneyDiary();
  const { moneyDiary, mode, setMode, resetMoneyDiary } = store.moneyDiary();

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

  const onSubmit = useCallback(
    async (moneyDiaryDto: MoneyDiaryDto) => {
      const body = {
        ...moneyDiaryDto,
        categories: moneyDiaryDto.categories.map(Number),
        withdrawal: moneyDiaryDto.withdrawal || 0,
        payment: moneyDiaryDto.payment || 0,
      };
      let response: { isError: boolean; body: object };
      if (mode === "EDIT") {
        response = await handlingError(apiClient.money_diary._id(moneyDiary.id.toString()).$put, "更新", { body });
      } else {
        response = await handlingError(apiClient.money_diary.post, "登録", { body });
      }
      if (response.isError) return;
      screenUpdate(body);
    },
    [mode, moneyDiary]
  );

  const screenUpdate = useCallback(
    (data: MoneyDiaryDto) => {
      form.reset();
      resetMoneyDiary();
      mutate();
      setMode("NEW");
      showNotification({
        title: `${data.date.getFullYear()}年${data.date.getMonth() + 1}月`,
        message: `${data.expenseItemName}を${mode === "NEW" ? "追加" : "更新"}しました`,
      });
    },
    [form]
  );

  return { form, onSubmit, openedDrawer, setOpenedDrawer };
};
