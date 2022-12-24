import { Box, Select, Text } from "@mantine/core";
import { FC } from "react";
import { store } from "../../../libs/store";

type Props = {
  isShowMonth?: boolean;
};

export const SelectYearAndMonth: FC<Props> = ({ isShowMonth = true }) => {
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
    <Box className=" pb-4 flex">
      <Text mr="md" mt={6}>
        期間
      </Text>
      <Select
        className="w-24 mr-2"
        placeholder="表示する年を選択してください"
        value={year}
        onChange={setYear}
        data={years}
      />
      {isShowMonth && (
        <Select
          className="w-24"
          placeholder="表示する月を選択してください"
          value={month}
          onChange={setMonth}
          data={months}
        />
      )}
    </Box>
  );
};
