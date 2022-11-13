import { FC } from "react";
import { Table } from "@mantine/core";
import { IconArrowsSort } from "@tabler/icons";
import { FallbackTable } from "./FallbackTable";
import { useMoneyDiary } from "../../../hooks/useMoneyDiary";
import { DetailRow } from "./DetailRow";
import { useSearchStore } from "../../../libs/store/search";
import { useRouter } from "next/router";
import { useFetchers } from "../../../hooks/useFetcher";
import { MoneyDiaryGetResponse } from "../../../../api/@types";
import useSWR from "swr";

export const MoneyDiaryTable: FC = () => {
  const { setOrderByDate, setOrderByIncomeAndExpenditure, resetOrderByIncomeAndExpenditure } = useSearchStore();
  const router = useRouter();

  const { data, error, minusColor, sumPayment, sumWithdrawal } = useMoneyDiary();
  if (error) {
    console.log({ error });
  }
  if (!data) return <FallbackTable isLoading={true} />;

  if (data.length === 0) return <FallbackTable isLoading={false} />;

  const sortByDate = () => {
    setOrderByDate();
    resetOrderByIncomeAndExpenditure();
  };
  const sortByIncomeAndExpenditure = () => {
    setOrderByIncomeAndExpenditure();
  };

  return (
    <Table highlightOnHover withBorder className="border-gray-100">
      <thead className="bg-gray-800 h-14">
        <tr>
          <th className=" text-white" colSpan={6}>
            {new Date(data[0].date).getMonth() + 1}月
            <p className="flex float-right">
              <span className="px-2">収入 {sumWithdrawal.toLocaleString()}(円)</span>
              <span className="px-2">支出 {sumPayment.toLocaleString()}(円)</span>
              <span className="px-2">
                収支
                <span className={minusColor(sumWithdrawal - sumPayment)}>
                  {(sumWithdrawal - sumPayment).toLocaleString()}
                </span>
                (円)
              </span>
            </p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className=" border-b">
          <td className="flex cursor-pointer" onClick={sortByDate}>
            日付 <IconArrowsSort strokeWidth={1} size={20} />
          </td>
          <td>費目名</td>
          <td className="flex cursor-pointer" onClick={sortByIncomeAndExpenditure}>
            収支
            <IconArrowsSort strokeWidth={1} size={20} />
          </td>
          <td>メモ</td>
          <td>カテゴリー</td>
          <td></td>
        </tr>
      </tbody>
      {data.map((moneyDiary) => {
        return (
          <tbody key={moneyDiary.id}>
            <DetailRow moneyDiary={moneyDiary} />
          </tbody>
        );
      })}
    </Table>
  );
};
