import { FC } from "react";
import { MoneyDiaryForm } from "../../ui/form/MoneyDiary/MoneyDiaryForm";
import { Layout } from "../../ui/Layout";
import { SelectYearAndMonth } from "../../ui/select/SelectTwoPieces";
import { MoneyDiaryList } from "../../ui/list/moneyDiary/MoneyDiaryList";
import { WithTitlePanel } from "../../ui/panel/WithTitlePanel";
import { ChartPanel } from "../../ui/panel/month/ChartPanel";
import { TablePanel } from "../../ui/panel/month/TablePanel";

export const Home: FC = () => {
  return (
    <Layout>
      <div className="">
        <div className="flex justify-end mr-12">
          <SelectYearAndMonth />
        </div>
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
          <MoneyDiaryList />
        </WithTitlePanel>
      </div>
    </Layout>
  );
};
