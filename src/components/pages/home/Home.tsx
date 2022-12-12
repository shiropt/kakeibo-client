import { FC } from "react";
import { MoneyDiaryForm } from "../../ui/form/MoneyDiary/MoneyDiaryForm";
import { Layout } from "../../ui/Layout";
import { SelectYearAndMonth } from "../../ui/select/SelectTwoPieces";
import { Grid } from "@mantine/core";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { MoneyDiaryList } from "../../ui/list/moneyDiary/MoneyDiaryList";
import { WithTitlePanel } from "../../ui/panel/WithTitlePanel";
import { AggregateTable } from "../../ui/table/AggregateTable";
import { useMoneyDiary } from "../../../hooks/useMoneyDiary";

export const Home: FC = () => {
  const { aggregates } = useMoneyDiary();
  if (!aggregates) return <p>...</p>;
  const data = [
    { title: "収入", price: aggregates.comprehensive.withdrawal },
    { title: "総支出", price: aggregates.comprehensive.payment },
    { title: "収支", price: aggregates.comprehensive.incomeAndExpenditure },
  ];
  return (
    <Layout>
      <div className="">
        <div className="flex justify-between mb-8">
          <div className="flex flex-col justify-between w-2/4">
            <WithTitlePanel title="収支">
              <AggregateTable rows={data} />
            </WithTitlePanel>
            <WithTitlePanel title="当月収支推移">
              <div className=" h-48">グラフ</div>
            </WithTitlePanel>
          </div>

          <div className=" w-2/4">
            <WithTitlePanel title="入力">
              <MoneyDiaryForm />
            </WithTitlePanel>
          </div>
        </div>
        <WithTitlePanel title="収支一覧">
          <div className="flex justify-end">
            <SelectYearAndMonth />
          </div>
          <MoneyDiaryList />
        </WithTitlePanel>
      </div>
    </Layout>
  );
};
