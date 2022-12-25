import { Table } from "@mantine/core";
import { FC } from "react";
import { minusColor } from "../../../utils/common";

type Props = {
  incomeAndExpenditure: {
    withdrawal: number;
    payment: number;
    incomeAndExpenditure: number;
  };
};
export const IncomeAndExpenditurePanel: FC<Props> = ({
  incomeAndExpenditure: { withdrawal, payment, incomeAndExpenditure },
}) => {
  return (
    <Table>
      <thead className=" bg-yellow-100">
        <tr>
          <td className=" text-center">収入</td>
          <td></td>
          <td className=" pl-4">支出</td>
          <td></td>
          <td className=" pl-4">収支</td>
        </tr>
      </thead>
      <tbody className=" bg-white">
        <tr>
          <td className=" text-center">{withdrawal.toLocaleString()}円</td>
          <td>-</td>
          <td>{payment.toLocaleString()}円</td>
          <td>=</td>
          <td className={minusColor(incomeAndExpenditure)}>{incomeAndExpenditure.toLocaleString()}円</td>
        </tr>
      </tbody>
    </Table>
  );
};
