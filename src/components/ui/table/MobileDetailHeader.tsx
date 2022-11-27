import { IconArrowsSort } from "@tabler/icons";
import { FC } from "react";

type Props = {
  sortByDate: VoidFunction;
  sortByIncomeAndExpenditure: VoidFunction;
};

export const MobileDetailHeader: FC<Props> = ({ sortByDate, sortByIncomeAndExpenditure }) => {
  return (
    <tr className="border-b bg-gray-100">
      <td colSpan={1} className="flex">
        <p className="flex w-36 cursor-pointer ml-2" onClick={sortByDate}>
          日付 <IconArrowsSort strokeWidth={1} size={20} />
        </p>
        <p className="flex cursor-pointer" onClick={sortByIncomeAndExpenditure}>
          収支
          <IconArrowsSort strokeWidth={1} size={20} />
        </p>
      </td>
    </tr>
  );
};
