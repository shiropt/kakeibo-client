import { FC } from "react";
import { Table } from "@mantine/core";

type Props = {
  rows: { title: string; price: number }[];
};
export const AggregateTable: FC<Props> = ({ rows }) => {
  const body = rows.map((row) => (
    <tr className="" key={row.title}>
      <td className=" bg-gray-300">{row.title}</td>
      <td className=" bg-white text-right">{row.price} 円</td>
    </tr>
  ));
  return (
    <Table withBorder withColumnBorders>
      <tbody>{body}</tbody>
    </Table>
  );
};
