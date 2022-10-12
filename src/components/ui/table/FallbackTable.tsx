import { Skeleton, Table } from "@mantine/core";
import { IconArrowsSort } from "@tabler/icons";
import { FC } from "react";

type Props = {
  isLoading: boolean;
};

export const FallbackTable: FC<Props> = ({ isLoading }) => {
  return (
    <Table>
      <thead className="bg-gray-800 h-14">
        <tr>
          <th className=" text-white" colSpan={6}></th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-gray-100">
          <td className="flex">
            日付 <IconArrowsSort strokeWidth={1} size={20} />
          </td>
          <td>費目名</td>
          <td className="flex">
            収支
            <IconArrowsSort strokeWidth={1} size={20} />
          </td>
          <td>メモ</td>
          <td>カテゴリー</td>
          <td></td>
        </tr>
        {isLoading ? (
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => {
            return (
              <tr key={i}>
                <td colSpan={6}>
                  <Skeleton className="border-b-2" mb={8} height={36} />
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td>データがありません</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
