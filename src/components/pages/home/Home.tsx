import { FC, useState } from "react";
import { MoneyDiaryForm } from "../../ui/form/MoneyDiary/MoneyDiaryForm";
import { Layout } from "../../ui/Layout";
import { MoneyDiaryTable } from "../../ui/table/MoneyDiaryTable";
import { SelectYearAndMonth } from "../../ui/select/SelectTwoPieces";

export const Home: FC = () => {
  return (
    <Layout>
      <div className="flex">
        <div>
          <div className=" float-right mt-4 mr-2 p-4">
            <SelectYearAndMonth />
          </div>
          <MoneyDiaryTable />
        </div>
        <MoneyDiaryForm />
      </div>
    </Layout>
  );
};
