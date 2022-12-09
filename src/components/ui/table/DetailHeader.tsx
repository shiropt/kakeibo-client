import { IconArrowsSort } from "@tabler/icons";
import { FC } from "react";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

type Props = {
  sortByDate: VoidFunction;
  sortByIncomeAndExpenditure: VoidFunction;
};

export const DetailHeader: FC<Props> = ({ sortByDate, sortByIncomeAndExpenditure }) => {
  const { smallScreen } = useMediaQuery();

  const detailHeader = (
    <tr className=" border-b">
      <td className="cursor-pointer" onClick={sortByDate}>
        <p className="flex w-32">
          日付 <IconArrowsSort strokeWidth={1} size={20} />
        </p>
      </td>
      <td>費目名</td>
      <td className="cursor-pointer" onClick={sortByIncomeAndExpenditure}>
        <p className="flex cursor-pointer">
          収支
          <IconArrowsSort strokeWidth={1} size={20} />
        </p>
      </td>
      <td>メモ</td>
      <td>カテゴリー</td>
      <td></td>
    </tr>
  );

  const mobileDetailHeader = (
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
  return smallScreen ? mobileDetailHeader : detailHeader;
};
