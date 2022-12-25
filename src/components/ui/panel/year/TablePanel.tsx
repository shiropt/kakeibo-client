import { FC } from "react";
import { useMoneyDiary } from "../../../../hooks/useMoneyDiary";
import { store } from "../../../../libs/store";
import { IncomeAndExpenditurePanel } from "../IncomeAndEexpenditurePanel";
import { WithTitlePanel } from "../WithTitlePanel";

export const TablePanel: FC = () => {
  const { year } = store.search();
  const { aggregates } = useMoneyDiary();

  if (!aggregates)
    return (
      <WithTitlePanel title="収支">
        <IncomeAndExpenditurePanel incomeAndExpenditure={{ withdrawal: 0, payment: 0, incomeAndExpenditure: 0 }} />
      </WithTitlePanel>
    );

  const result = aggregates.aggregateByYear.find((aggregate) => aggregate.date === year);
  const title = `${year}年収支`;

  return (
    <WithTitlePanel title={title}>
      <IncomeAndExpenditurePanel
        incomeAndExpenditure={{
          withdrawal: result ? result.withdrawal : 0,
          payment: result ? result.payment : 0,
          incomeAndExpenditure: result ? result.incomeAndExpenditure : 0,
        }}
      />
    </WithTitlePanel>
  );
};
