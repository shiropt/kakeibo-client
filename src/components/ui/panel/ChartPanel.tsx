import { FC } from "react";
import { WithTitlePanel } from "./WithTitlePanel";
import { useMoneyDiary } from "../../../hooks/useMoneyDiary";
import { PieChart, Pie, Cell } from "recharts";

export const ChartPanel: FC = () => {
  const { moneyDiaries } = useMoneyDiary();

  if (!moneyDiaries) return <WithTitlePanel title="出費内訳">...</WithTitlePanel>;

  const data = moneyDiaries
    .filter((moneyDiary) => moneyDiary.payment > 0)
    .map((moneyDiary) => {
      return { name: moneyDiary.expenseItemName, value: moneyDiary.payment };
    })
    .sort((a, b) => b.value - a.value);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <WithTitlePanel title="出費内訳">
      <PieChart width={830} height={340}>
        <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={80} dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </WithTitlePanel>
  );
};
