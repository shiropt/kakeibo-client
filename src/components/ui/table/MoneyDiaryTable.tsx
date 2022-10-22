import { FC, useCallback } from "react";
import { Table, Badge, Menu } from "@mantine/core";
import { IconCopy, IconTrash, IconEdit, IconDots, IconArrowsSort } from "@tabler/icons";
import { FallbackTable } from "./FallbackTable";
import useAspidaSWR from "@aspida/swr";
import { apiClient } from "../../../hooks/useFetcher";
import { useMoneyDiary } from "../../../hooks/useMoneyDiary";

export const MoneyDiaryTable: FC = () => {
  const minusColor = (num: number) => {
    return num < 0 ? "text-red-500" : "";
  };
  const { data, error } = useMoneyDiary();

  const sortDate = useCallback(() => {}, [data]);
  if (!data) return <FallbackTable isLoading={true} />;
  if (data.length === 0) return <FallbackTable isLoading={false} />;
  if (error) return <p>Error</p>;
  const sumWithdrawal = data
    .map((moneyDiary) => moneyDiary.withdrawal)
    .reduce((prev, current) => {
      return prev || 0 + (current || 0);
    }, 0);
  const sumPayment = data
    .map((moneyDiary) => moneyDiary.payment)
    .reduce((prev, current) => {
      return prev || 0 + (current || 0);
    }, 0);

  return (
    <Table className="border-gray-100">
      <thead className="bg-gray-800 h-14">
        <tr>
          <th className=" text-white" colSpan={1}>
            {new Date(data[0].date).getMonth() + 1}月
          </th>
          <th colSpan={1}></th>
          <th colSpan={4} className="text-right text-white">
            <p className="flex float-right">
              <span className="px-2">収入 {(sumWithdrawal || 0).toLocaleString()}(円)</span>
              <span className="px-2">支出 {(sumPayment || 0).toLocaleString()}(円)</span>
              <span className="px-2">
                収支
                <span className={minusColor(sumWithdrawal || 0 - (sumPayment || 0))}>
                  {(sumWithdrawal || 0 - (sumPayment || 0)).toLocaleString()}
                </span>
                (円)
              </span>
            </p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className=" border-b">
          <td className="flex" onClick={sortDate}>
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
      </tbody>
      {data.map((moneyDiary) => {
        return (
          <tbody key={moneyDiary.id}>
            <tr key={moneyDiary.id}>
              <td className="w-20">{new Date(moneyDiary.date).getDate() + "日"}</td>
              <td className="w-80">{moneyDiary.expenseItemName}</td>
              <td className="w-40">
                <span className={minusColor(moneyDiary.withdrawal || 0 - (moneyDiary.payment || 0))}>
                  {(moneyDiary.withdrawal || 0 - (moneyDiary.payment || 0)).toLocaleString()}
                </span>
              </td>
              <td className="w-96">{moneyDiary.memo}</td>
              <td className="w-44">
                {moneyDiary.categories.map((category) => (
                  <Badge className="mx-2" key={category.id}>
                    {category.name}
                  </Badge>
                ))}
              </td>
              <td className="w-14">
                <Menu shadow="md" width={100} trigger="hover" openDelay={100} closeDelay={400}>
                  <Menu.Target>
                    <p className="mr-2 cursor-pointer">
                      <IconDots size={14} />
                    </p>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item icon={<IconEdit size={14} />}>編集</Menu.Item>
                    <Menu.Item icon={<IconCopy size={14} />}>複製</Menu.Item>
                    <Menu.Item icon={<IconTrash size={14} />}>削除</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </td>
            </tr>
          </tbody>
        );
      })}
    </Table>
  );
};
