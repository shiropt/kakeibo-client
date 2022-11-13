import { useFetchers } from "./useFetcher";
import useAspidaSWR from "@aspida/swr";
import { useSearchStore } from "../libs/store/search";
import { openConfirmModal } from "@mantine/modals";
import { showNotification } from "@mantine/notifications";
import { MoneyDiaryGetResponse } from "../../api/@types";

const getPath = () => {
  const searchMoneyDiary = (params: {
    year: string;
    month: string;
    orderByDate: "asc" | "desc";
    orderByIncomeAndExpenditure: "" | "payment" | "withdrawal";
  }) => {
    const { year, month, orderByDate, orderByIncomeAndExpenditure } = params;
    return `api/v1/money-diary/search?year=${year}&month=${month}&orderByDate=${orderByDate}&orderByIncomeAndExpenditure=${orderByIncomeAndExpenditure}`;
  };
  return { searchMoneyDiary };
};

export const useMoneyDiary = () => {
  const { apiClient, useFetch } = useFetchers();
  const { month, year, orderByDate, setMonth, setYear, orderByIncomeAndExpenditure } = useSearchStore();
  const { searchMoneyDiary } = getPath();
  const { data, error, mutate } = useFetch<MoneyDiaryGetResponse[]>(
    searchMoneyDiary({ year, month, orderByDate, orderByIncomeAndExpenditure })
  );

  const { data: categories } = useAspidaSWR(apiClient.category);

  const minusColor = (num: number) => {
    return num < 0 ? "text-red-500" : "";
  };
  const total = (data: MoneyDiaryGetResponse[] | undefined, key: "withdrawal" | "payment") => {
    if (!data) return 0;
    const result = data
      .map((moneyDiary) => moneyDiary[key])
      .reduce((prev, current) => {
        return prev + current;
      }, 0);

    return result;
  };

  const sumWithdrawal = total(data, "withdrawal");
  const sumPayment = total(data, "payment");

  const deleteMoneyDiary = async (id: number, item: string) => {
    await apiClient.money_diary._id(id.toString()).$delete();
    mutate();
    showNotification({
      message: `${item}を削除しました`,
    });
  };
  const openDeleteModal = (item: string, id: number) => {
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
  };

  return {
    data,
    error,
    month,
    year,
    setMonth,
    setYear,
    minusColor,
    total,
    sumPayment,
    sumWithdrawal,
    openDeleteModal,
    categories,
    mutate,
  };
};
