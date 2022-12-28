import { FC } from "react";
import { useMoneyDiary } from "../../../../hooks/useMoneyDiary";
import { store } from "../../../../libs/store";
import { IncomeAndExpenditurePanel } from "../IncomeAndEexpenditurePanel";
import { WithTitlePanel } from "../WithTitlePanel";

export const TablePanel: FC = () => {
  const { moneyDiaries } = useMoneyDiary();
  const { year, month } = store.search();

  const title = `${year}年 ${month}月 収支`;

  if (!moneyDiaries)
    return (
      <WithTitlePanel title={""}>
        <IncomeAndExpenditurePanel incomeAndExpenditure={{ withdrawal: 0, payment: 0, incomeAndExpenditure: 0 }} />
      </WithTitlePanel>
    );
  const totalWithdrawal = moneyDiaries.reduce((prev, current) => prev + current.withdrawal, 0);
  const totalPayment = moneyDiaries.reduce((prev, current) => prev + current.payment, 0);

  return (
    <WithTitlePanel title={title}>
      <IncomeAndExpenditurePanel
        incomeAndExpenditure={{
          withdrawal: totalWithdrawal,
          payment: totalPayment,
          incomeAndExpenditure: totalWithdrawal - totalPayment,
        }}
      />
    </WithTitlePanel>
  );
};
