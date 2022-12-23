import { FC } from "react";
import { MoneyDiaryForm } from "../../ui/form/MoneyDiary/MoneyDiaryForm";
import { Layout } from "../../ui/Layout";
import { SelectYearAndMonth } from "../../ui/select/SelectTwoPieces";
import { MoneyDiaryList } from "../../ui/list/moneyDiary/MoneyDiaryList";
import { WithTitlePanel } from "../../ui/panel/WithTitlePanel";
import { ChartPanel } from "../../ui/panel/year/ChartPanel";
import { TablePanel } from "../../ui/panel/year/TablePanel";

export const Year: FC = () => {
  return (
    <Layout>
      <div className="">
        <div className="flex">
          <div>
            <TablePanel />
            {/* <ChartPanel /> */}
          </div>
          <div className=" w-full">
            <WithTitlePanel title="入力">
              <MoneyDiaryForm />
            </WithTitlePanel>
          </div>
        </div>
        <WithTitlePanel title="年間収支一覧">
          {/* <div className="flex justify-end">
            <SelectYearAndMonth />
          </div>
          <MoneyDiaryList /> */}
        </WithTitlePanel>
      </div>
    </Layout>
  );
};
