import { FC } from "react";
import { Table } from "@mantine/core";
import { minusColor } from "../../../utils/common";

type Props = {
  rows: { title: string; price: number }[];
};
export const AggregateTable: FC<Props> = ({ rows }) => {
  const body = rows.map((row) => (
    <tr className="" key={row.title}>
      <td className=" w-80 bg-gray-300">{row.title}</td>
      <td className=" w-80 bg-white text-right">
        <span className={minusColor(row.price)}>{row.price.toLocaleString()} </span>円
      </td>
    </tr>
  ));
  return (
    <Table withBorder withColumnBorders>
      <tbody>{body}</tbody>
    </Table>
  );
};
