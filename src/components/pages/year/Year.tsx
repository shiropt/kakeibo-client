import { FC } from "react";
import { MoneyDiaryForm } from "../../ui/form/MoneyDiary/MoneyDiaryForm";
import { Layout } from "../../ui/Layout";
import { SelectYearAndMonth } from "../../ui/select/SelectTwoPieces";
import { WithTitlePanel } from "../../ui/panel/WithTitlePanel";
import { ChartPanel } from "../../ui/panel/year/ChartPanel";
import { TablePanel } from "../../ui/panel/year/TablePanel";
import { MonthList } from "../../ui/list/month/MonthList";

export const Year: FC = () => {
  return (
    <Layout>
      <div className="">
        <div className="flex justify-end mr-12">
          <SelectYearAndMonth isShowMonth={false} />
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
        <WithTitlePanel title="年間収支一覧">
          <div className="flex justify-end"></div>
          <MonthList />
        </WithTitlePanel>
      </div>
    </Layout>
  );
};
