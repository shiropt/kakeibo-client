import { FC } from "react";
import { Aggregate } from "../../../../../api/@types";
import { store } from "../../../../libs/store";
import { minusColor } from "../../../../utils/common";
import { useRouter } from "next/router";
import { Anchor } from "@mantine/core";

type Props = {
  aggregate: Aggregate;
};
export const DetailRow: FC<Props> = ({ aggregate: { date, withdrawal, payment, incomeAndExpenditure } }) => {
  const month = date.substring(date.indexOf("-")).slice(1);
  const { setMonth } = store.search();
  const router = useRouter();
  const moveToDetail = () => {
    setMonth(month);
    router.push("/");
  };
  return (
    <tr>
      <td>
        <Anchor onClick={moveToDetail}>
          <p>{month + "月"}</p>
        </Anchor>
      </td>
      <td>
        <p className="text-center">{withdrawal.toLocaleString()}円</p>
      </td>
      <td>
        <p className="text-center">{payment.toLocaleString()}円</p>
      </td>
      <td>
        <p className="text-center">
          <span className={minusColor(incomeAndExpenditure)}>{incomeAndExpenditure.toLocaleString()}円</span>
        </p>
      </td>
      <td className=" w-96 text-center">-</td>
    </tr>
  );
};
