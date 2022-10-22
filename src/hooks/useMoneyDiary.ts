import useAspidaSWR from "@aspida/swr";
import { useEffect, useState } from "react";
import { apiClient } from "../hooks/useFetcher";
import { useDateStore } from "../libs/store/date";

export const useMoneyDiary = () => {
  const { month, year, setMonth, setYear } = useDateStore();
  const { data, error, mutate } = useAspidaSWR(apiClient.money_diary.search, {
    headers: { userId: "1" },
    query: { year, month },
  });

  return { data, error, month, year, setMonth, setYear, mutate };
};
