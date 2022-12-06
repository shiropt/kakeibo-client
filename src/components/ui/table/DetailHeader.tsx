import { IconArrowsSort } from "@tabler/icons";
import { FC } from "react";

type Props = {
  sortByDate: VoidFunction;
  sortByIncomeAndExpenditure: VoidFunction;
};

export const DetailHeader: FC<Props> = ({ sortByDate, sortByIncomeAndExpenditure }) => {
  return (
    <tr className=" border-b">
      <td className="cursor-pointer" onClick={sortByDate}>
        <p className="flex w-32" onClick={sortByDate}>
          日付 <IconArrowsSort strokeWidth={1} size={20} />
        </p>
      </td>
      <td>費目名</td>
      <td className="cursor-pointer" onClick={sortByIncomeAndExpenditure}>
        <p className="flex cursor-pointer" onClick={sortByIncomeAndExpenditure}>
          収支
          <IconArrowsSort strokeWidth={1} size={20} />
        </p>
      </td>
      <td>メモ</td>
      <td>カテゴリー</td>
      <td></td>
    </tr>
  );
};
