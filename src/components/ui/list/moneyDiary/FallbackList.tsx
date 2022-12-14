import { Skeleton, Table } from "@mantine/core";
import { FC } from "react";

type Props = {
  isLoading: boolean;
};

export const FallbackList: FC<Props> = ({ isLoading }) => {
  return (
    <Table>
      <tbody>
        <tr className="bg-gray-100">
          <td className=" w-24">日付</td>
          <td className="">費目名</td>
          <td>収支</td>
          <td className="">メモ</td>
          <td className="w-11" colSpan={2}>
            カテゴリー
          </td>
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
            <td colSpan={6}>データがありません</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
