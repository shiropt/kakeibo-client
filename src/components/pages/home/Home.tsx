import { FC, useState } from "react";
import { MoneyDiaryForm } from "../../ui/form/MoneyDiary/MoneyDiaryForm";
import { Layout } from "../../ui/Layout";
import { MoneyDiaryTable } from "../../ui/table/MoneyDiaryTable";
import { SelectYearAndMonth } from "../../ui/select/SelectTwoPieces";

export const Home: FC = () => {
  const [year, setYear] = useState<string | null>(new Date().getFullYear().toString());
  const [month, setMonth] = useState<string | null>((new Date().getMonth() + 1).toString());
  return (
    <Layout>
      <div className="flex">
        <div>
          <div className=" float-right mt-4 mr-2 p-4">
            <SelectYearAndMonth year={year} month={month} setYear={setYear} setMonth={setMonth} />
          </div>
          <MoneyDiaryTable year={year} month={month} />
        </div>
        <MoneyDiaryForm />
      </div>
    </Layout>
  );
};
