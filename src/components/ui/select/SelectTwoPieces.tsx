import { Select } from "@mantine/core";
import { FC } from "react";
import { store } from "../../../libs/store";

export const SelectYearAndMonth: FC = () => {
  const { month, year, setMonth, setYear } = store.search();
  const threeYearsAgo = new Date().getFullYear() - 3;

  const years = [...Array(5)].map((_, i) => {
    const year = (threeYearsAgo + i).toString();
    return { value: year, label: `${year}年` };
  });

  const months = [...Array(12)].map((_, i) => {
    const month = (i + 1).toString();
    return { value: month, label: `${month}月` };
  });

  return (
    <div className=" flex">
      <Select
        className="w-24 mr-2"
        placeholder="表示する年を選択してください"
        value={year}
        onChange={setYear}
        data={years}
      />
      <Select
        className="w-24"
        placeholder="表示する月を選択してください"
        value={month}
        onChange={setMonth}
        data={months}
      />
    </div>
  );
};
