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

  const form = useForm<MoneyDiaryDto>({
    initialValues: { ...moneyDiary, payment: "", withdrawal: "" },
    transformValues: (values) => ({
      ...values,
      payment: values.payment === "" ? 0 : Number(values.payment),
      withdrawal: values.withdrawal === "" ? 0 : Number(values.withdrawal),
    }),
    validate: ({ expenseItemName, payment, withdrawal, date }) => ({
      expenseItemName: !expenseItemName ? "必須項目です" : null,
      payment: payment !== "" && isNaN(Number(payment)) ? "数値を入力してください" : null,
      withdrawal: withdrawal !== "" && isNaN(Number(withdrawal)) ? "数値を入力してください" : null,
      date: !date ? "必須項目です" : null,
    }),
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
