import { FC } from "react";
import { useMoneyDiary } from "../../../../hooks/useMoneyDiary";
import { AggregateTable } from "../../table/AggregateTable";
import { WithTitlePanel } from "../WithTitlePanel";

export const TablePanel: FC = () => {
  const { aggregates } = useMoneyDiary();

  if (!aggregates)
    return (
      <WithTitlePanel title="収支">
        <AggregateTable
          rows={[
            { title: "収入", price: 0 },
            { title: "総支出", price: 0 },
            { title: "収支", price: 0 },
          ]}
        />
      </WithTitlePanel>
    );

  const result = aggregates.aggregateByYear.find((aggregate) => aggregate.date === "2022");

  const data = [
    { title: "総収入", price: result ? result.withdrawal : 0 },
    { title: "総支出", price: result ? result.payment : 0 },
    { title: "収支", price: result ? result.incomeAndExpenditure : 0 },
  ];
  return (
    <WithTitlePanel title="年間収支">
      <AggregateTable rows={data} />
    </WithTitlePanel>
  );
};
