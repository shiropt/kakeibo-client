import { FC } from "react";
import { WithTitlePanel } from "../WithTitlePanel";
import { useMoneyDiary } from "../../../../hooks/useMoneyDiary";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Box } from "@mantine/core";
import { store } from "../../../../libs/store";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const ChartPanel: FC = () => {
  const { year } = store.search();

  const { aggregates } = useMoneyDiary();
  if (!aggregates) return <p>...</p>;
  const result = aggregates.aggregateByMonth.filter((aggregate) => aggregate.date === year);
  const targets = aggregates.aggregateByMonth.filter((month) => month.date.slice(0, 4) === year);
  let total = 0;

  const totals = targets.map((target, i) => {
    total = total + target.incomeAndExpenditure;
    return total;
  });

  const labels = targets.map((month) => month.date);
  const data = {
    labels,
    datasets: [
      {
        label: "収支",
        data: totals,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
    ],
  };
  console.log({ result });

  return (
    <WithTitlePanel title="年間収支推移">
      <Box w={700}>
        <Line data={data} />
      </Box>
    </WithTitlePanel>
  );
};
