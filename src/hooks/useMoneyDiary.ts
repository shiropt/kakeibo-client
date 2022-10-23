import { MoneyDiaryGetResponse } from "./../../api/@types/index";
import useAspidaSWR from "@aspida/swr";
import { apiClient } from "../hooks/useFetcher";
import { useDateStore } from "../libs/store/date";
import { openConfirmModal } from "@mantine/modals";
import { showNotification } from "@mantine/notifications";

export const useMoneyDiary = () => {
  const { month, year, setMonth, setYear } = useDateStore();
  const { data, error, mutate } = useAspidaSWR(apiClient.money_diary.search, {
    headers: { userId: "1" },
    query: { year, month },
  });
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
    mutate,
    minusColor,
    total,
    sumPayment,
    sumWithdrawal,
    openDeleteModal,
  };
};
