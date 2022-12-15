import { FC } from "react";
import { WithTitlePanel } from "./WithTitlePanel";
import { AggregateTable } from "../table/AggregateTable";
import { useMoneyDiary } from "../../../hooks/useMoneyDiary";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export const ChartPanel: FC = () => {
  const { moneyDiaries } = useMoneyDiary();

  if (!moneyDiaries) return <WithTitlePanel title="支出推移">{null}</WithTitlePanel>;
  const totalWithdrawal = moneyDiaries.reduce((prev, current) => prev + current.withdrawal, 0);
  const totalPayment = moneyDiaries.reduce((prev, current) => prev + current.payment, 0);

  const data = moneyDiaries
    .filter((moneyDiary) => moneyDiary.payment > 0)
    .map((moneyDiary) => {
      return { name: moneyDiary.expenseItemName, value: moneyDiary.payment };
    })
    .sort((a, b) => b.value - a.value);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const renderCustomizedLabel = ({ name, value }: any) => {
    return `${name} ${value.toLocaleString()}円`;
  };

  return (
    <WithTitlePanel title="出費内訳">
      <PieChart width={800} height={615}>
        <Pie
          data={data}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={180}
          fill="#8884d8"
          nameKey="name"
          dataKey="value"
          cx="45%"
          isAnimationActive={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </WithTitlePanel>
  );
};
