import { Select } from "@mantine/core";
import { FC } from "react";
import { useMoneyDiary } from "../../../hooks/useMoneyDiary";

export const SelectYearAndMonth: FC = () => {
  const { year, month, setMonth, setYear } = useMoneyDiary();
  return (
    <div className=" flex">
      <Select
        className="w-24 mr-2"
        placeholder="表示する年を選択してください"
        value={year}
        onChange={setYear}
        data={[
          { value: "2020", label: "2020" },
          { value: "2021", label: "2021" },
          { value: "2022", label: "2022" },
          { value: "2023", label: "2023" },
        ]}
      />
      <Select
        className="w-24"
        placeholder="表示する月を選択してください"
        value={month}
        onChange={setMonth}
        data={[
          { value: "1", label: "1月" },
          { value: "2", label: "2月" },
          { value: "3", label: "3月" },
          { value: "4", label: "4月" },
          { value: "5", label: "5月" },
          { value: "6", label: "6月" },
          { value: "7", label: "7月" },
          { value: "8", label: "8月" },
          { value: "9", label: "9月" },
          { value: "10", label: "10月" },
          { value: "11", label: "11月" },
          { value: "12", label: "12月" },
        ]}
      />
    </div>
  );
};
