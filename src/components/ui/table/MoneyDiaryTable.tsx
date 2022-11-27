import { FC } from "react";
import { Table } from "@mantine/core";
import { FallbackTable } from "./FallbackTable";
import { useMoneyDiary } from "../../../hooks/useMoneyDiary";
import { DetailRow } from "./DetailRow";
import { useSearchStore } from "../../../libs/store/search";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { DetailHeader } from "./DetailHeader";
import { MobileDetailHeader } from "./MobileDetailHeader";
import { MobileDetailRow } from "./MobileDetailRow";

export const MoneyDiaryTable: FC = () => {
  const { setOrderByDate, setOrderByIncomeAndExpenditure, resetOrderByIncomeAndExpenditure } = useSearchStore();
  const { smallScreen } = useMediaQuery();
  const style = smallScreen ? "flex float-right" : "flex float-right";

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
        {smallScreen ? (
          <MobileDetailHeader sortByDate={sortByDate} sortByIncomeAndExpenditure={setOrderByIncomeAndExpenditure} />
        ) : (
          <DetailHeader sortByDate={sortByDate} sortByIncomeAndExpenditure={setOrderByIncomeAndExpenditure} />
        )}

        {data.map((moneyDiary) => {
          return smallScreen ? <MobileDetailRow moneyDiary={moneyDiary} /> : <DetailRow moneyDiary={moneyDiary} />;
        })}
      </tbody>
    </Table>
  );
};
