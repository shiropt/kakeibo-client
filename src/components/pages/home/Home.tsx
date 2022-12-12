import { FC } from "react";
import { MoneyDiaryForm } from "../../ui/form/MoneyDiary/MoneyDiaryForm";
import { Layout } from "../../ui/Layout";
import { SelectYearAndMonth } from "../../ui/select/SelectTwoPieces";
import { MoneyDiaryList } from "../../ui/list/moneyDiary/MoneyDiaryList";
import { WithTitlePanel } from "../../ui/panel/WithTitlePanel";
import { TablePanel } from "../../ui/panel/TablePanel";

export const Home: FC = () => {
  return (
    <Layout>
      <div className="">
        <div className="flex justify-between mb-8">
          <div className="flex flex-col justify-between w-2/4">
            <TablePanel />
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
