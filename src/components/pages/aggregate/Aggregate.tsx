import { FC } from "react";
import { useMoneyDiary } from "../../../hooks/useMoneyDiary";
import { MoneyDiaryForm } from "../../ui/form/MoneyDiary/MoneyDiaryForm";
import { Layout } from "../../ui/Layout";
import { WithTitlePanel } from "../../ui/panel/WithTitlePanel";
import { AggregateTable } from "../../ui/table/AggregateTable";

export const Aggregate: FC = () => {
  const { aggregates } = useMoneyDiary();
  if (!aggregates) return <p>...</p>;
  const data = [
    { title: "総収入", price: aggregates.comprehensive.withdrawal },
    { title: "総支出", price: aggregates.comprehensive.payment },
    { title: "収支", price: aggregates.comprehensive.incomeAndExpenditure },
  ];

  return (
    <Layout>
      <div className="flex">
        <WithTitlePanel title="収支">
          <AggregateTable rows={data} />
        </WithTitlePanel>
        <WithTitlePanel title="入力">
          <MoneyDiaryForm />
        </WithTitlePanel>
      </div>
    </Layout>
  );
};
