import { FC } from "react";
import { WithTitlePanel } from "../../ui/panel/WithTitlePanel";
import { AggregateTable } from "../../ui/table/AggregateTable";
import { useMoneyDiary } from "../../../hooks/useMoneyDiary";

export const TablePanel: FC = () => {
  const { moneyDiaries } = useMoneyDiary();

  if (!moneyDiaries)
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
  const totalWithdrawal = moneyDiaries.reduce((prev, current) => prev + current.withdrawal, 0);
  const totalPayment = moneyDiaries.reduce((prev, current) => prev + current.payment, 0);

  const data = [
    { title: "収入", price: totalWithdrawal },
    { title: "総支出", price: totalPayment },
    { title: "収支", price: totalWithdrawal - totalPayment },
  ];
  return (
    <WithTitlePanel title="収支">
      <AggregateTable rows={data} />
    </WithTitlePanel>
  );
};
