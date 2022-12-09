import { FC, useCallback } from "react";
import { Table } from "@mantine/core";
import { FallbackTable } from "./FallbackTable";
import { useMoneyDiary } from "../../../hooks/useMoneyDiary";
import { DetailRow } from "./DetailRow";
import { DetailHeader } from "./DetailHeader";
import { store } from "../../../libs/store";
import { minusColor } from "../../../utils/common";

export const MoneyDiaryTable: FC = () => {
  const { setOrderByDate, setOrderByIncomeAndExpenditure, resetOrderByIncomeAndExpenditure } = store.search();
  const { data, sumPayment, sumWithdrawal, isLoading } = useMoneyDiary();
  const sortByDate = useCallback(() => {
    setOrderByDate();
    resetOrderByIncomeAndExpenditure();
  }, []);

  if (isLoading) return <FallbackTable isLoading={true} />;
  if (!data || data.length === 0) return <FallbackTable isLoading={false} />;

  return (
    <Table>
      <thead className="bg-gray-800 h-14">
        <tr>
          <th className=" text-white" colSpan={6}>
            <div className="flex justify-between items-center">
              <h4 className="w-16">{new Date(data[0].date).getMonth() + 1}月</h4>
              <div className="flex">
                <p className="px-2">収入 {sumWithdrawal.toLocaleString()}(円)</p>
                <p className="px-2">支出 {sumPayment.toLocaleString()}(円)</p>
                <p className="px-2">
                  収支
                  <span className={minusColor(sumWithdrawal - sumPayment)}>
                    {(sumWithdrawal - sumPayment).toLocaleString()}
                  </span>
                  (円)
                </p>
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <DetailHeader sortByDate={sortByDate} sortByIncomeAndExpenditure={setOrderByIncomeAndExpenditure} />
        {data.map((moneyDiary) => {
          return <DetailRow key={moneyDiary.id} moneyDiary={moneyDiary} />;
        })}
      </tbody>
    </Table>
  );
};
