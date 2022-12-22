import { FC } from "react";
import { MoneyDiaryForm } from "../../ui/form/MoneyDiary/MoneyDiaryForm";
import { Layout } from "../../ui/Layout";
import { SelectYearAndMonth } from "../../ui/select/SelectTwoPieces";
import { MoneyDiaryList } from "../../ui/list/moneyDiary/MoneyDiaryList";
import { WithTitlePanel } from "../../ui/panel/WithTitlePanel";
import { TablePanel } from "../../ui/panel/TablePanel";
import { ChartPanel } from "../../ui/panel/ChartPanel";

export const Home: FC = () => {
  return (
    <Layout>
      <div className="">
        <div className="flex">
          <div>
            <TablePanel />
            <ChartPanel />
          </div>
          <div className=" w-full">
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
