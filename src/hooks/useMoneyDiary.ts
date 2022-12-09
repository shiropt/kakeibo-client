import { useFetchers } from "./useFetcher";
import useAspidaSWR from "@aspida/swr";
import { openConfirmModal } from "@mantine/modals";
import { showNotification } from "@mantine/notifications";
import { MoneyDiaryGetResponse } from "../../api/@types";
import { getPath } from "../utils/path";
import { store } from "../libs/store";
import { useCallback } from "react";

export const useMoneyDiary = () => {
  const { apiClient, useFetch } = useFetchers();
  const { month, year, orderByDate, setMonth, setYear, orderByIncomeAndExpenditure } = store.search();
  const { searchMoneyDiary } = getPath();
  const { data, error, mutate, isLoading } = useFetch<MoneyDiaryGetResponse[]>(
    searchMoneyDiary({ year, month, orderByDate, orderByIncomeAndExpenditure })
  );
  const { data: categories } = useAspidaSWR(apiClient.category);

  const sumAmount = useCallback(
    (data: MoneyDiaryGetResponse[] | undefined, key: "withdrawal" | "payment") => {
      if (!data) return 0;
      return data.map((moneyDiary) => moneyDiary[key]).reduce((prev, current) => prev + current, 0);
    },
    [data]
  );

  const sumWithdrawal = sumAmount(data, "withdrawal");
  const sumPayment = sumAmount(data, "payment");

  const deleteMoneyDiary = useCallback(async (id: number, item: string) => {
    await apiClient.money_diary._id(id.toString()).$delete();
    mutate();
    showNotification({
      message: `${item}を削除しました`,
    });
  }, []);

  const openDeleteModal = useCallback((item: string, id: number) => {
    openConfirmModal({
      title: `${item}を削除します`,
      centered: true,
      size: 250,
      onCancel: () => {
        return;
      },
      onConfirm: () => {
        deleteMoneyDiary(id, item);
      },
    });
  }, []);

  return {
    data,
    error,
    month,
    year,
    setMonth,
    setYear,
    sumPayment,
    sumWithdrawal,
    openDeleteModal,
    categories,
    mutate,
    isLoading,
  };
};
