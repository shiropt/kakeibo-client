import useAspidaSWR from "@aspida/swr";
import { useState } from "react";
import { apiClient } from "../hooks/useFetcher";

export const useMoneyDiary = () => {
  const [year, setYear] = useState<string | null>(new Date().getFullYear().toString());
  const [month, setMonth] = useState<string | null>((new Date().getMonth() + 1).toString());
  const { data, error, mutate } = useAspidaSWR(apiClient.money_diary.search, {
    headers: { userId: "1" },
    query: { year: year || "", month: month || "" },
  });
  return { year, month, setYear, setMonth, data, error, mutate };
};
