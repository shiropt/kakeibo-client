import { FC, useCallback } from "react";
import { Table } from "@mantine/core";
import { store } from "../../../../libs/store";
import { useMoneyDiary } from "../../../../hooks/useMoneyDiary";
import { FallbackList } from "../moneyDiary/FallbackList";
import { DetailRow } from "./DetailRow";

export const MonthList: FC = () => {
  const { year } = store.search();
  const { isLoading, aggregates } = useMoneyDiary();

  if (isLoading) return <FallbackList isLoading={true} />;
  if (!aggregates) return <FallbackList isLoading={false} />;
  const result = aggregates.aggregateByMonth.filter((aggregate) => aggregate.date.slice(0, 4) === year);
  return (
    <Table h={550} highlightOnHover striped withColumnBorders className=" bg-white">
      <thead>
        <tr>
          <th></th>
          <th className="text-center">収入</th>
          <th className="text-center">支出</th>
          <th className="text-center">収支</th>
        </tr>
      </thead>
      <tbody>
        {result.map((aggregate) => {
          return <DetailRow key={aggregate.date} aggregate={aggregate} />;
        })}
      </tbody>
    </Table>
  );
};
