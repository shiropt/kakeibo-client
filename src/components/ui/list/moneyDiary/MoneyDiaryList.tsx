import { FC, useCallback } from "react";
import { Table } from "@mantine/core";
import { FallbackList } from "./FallbackList";
import { DetailRow } from "./DetailRow";
import { ListHeader } from "./ListHeader";
import { store } from "../../../../libs/store";
import { useMoneyDiary } from "../../../../hooks/useMoneyDiary";

export const MoneyDiaryList: FC = () => {
  const { setOrderByDate, setOrderByIncomeAndExpenditure, resetOrderByIncomeAndExpenditure } = store.search();
  const { moneyDiaries, sumPayment, sumWithdrawal, isLoading, aggregates } = useMoneyDiary();
  const sortByDate = useCallback(() => {
    setOrderByDate();
    resetOrderByIncomeAndExpenditure();
  }, []);

  if (isLoading) return <FallbackList isLoading={true} />;
  if (!moneyDiaries || moneyDiaries.length === 0) return <FallbackList isLoading={false} />;

  return (
    <Table className=" bg-white">
      <tbody>
        <ListHeader sortByDate={sortByDate} sortByIncomeAndExpenditure={setOrderByIncomeAndExpenditure} />
        {moneyDiaries.map((moneyDiary) => {
          return <DetailRow key={moneyDiary.id} moneyDiary={moneyDiary} />;
        })}
      </tbody>
    </Table>
  );
};
