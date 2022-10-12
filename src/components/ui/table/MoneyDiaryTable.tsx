import { FC, useCallback, useState } from "react";
import { Table, Badge, Menu, Button, Text, Select, Skeleton } from "@mantine/core";
import { API } from "../../../utils/path";
import { useFetchers } from "../../../hooks/useFetcher";
import { IconCopy, IconTrash, IconEdit, IconDots, IconArrowsSort } from "@tabler/icons";
import { FallbackTable } from "./FallbackTable";
import useAspidaSWR from "@aspida/swr";
import { apiClient } from "../../../../api";

type MoneyDiary = {
  id: number;
  memo: string;
  withdrawal: number;
  payment: number;
  date: Date;
  period: number;
  expenseItemName: string;
  categories: { id: number; name: string }[];
  createdAt: Date;
  updatedAt: Date;
};

type Props = {
  year: string | null;
  month: string | null;
};

export const MoneyDiaryTable: FC<Props> = ({ year, month }) => {
  const minusColor = (num: number) => {
    return num < 0 ? "text-red-500" : "";
  };
  const { data, error } = useAspidaSWR(apiClient.money_diary.search, {
    headers: { userId: "1" },
    query: { year: year || "", month: month || "" },
  });

  const sortDate = useCallback(() => {}, [data]);
  if (!data) return <FallbackTable isLoading={true} />;
  if (data.length === 0) return <FallbackTable isLoading={false} />;
  if (error) return <p>Error</p>;
  const sumWithdrawal = data
    .map((moneyDiary) => moneyDiary.withdrawal)
    .reduce((prev, current) => {
      return prev + current;
    }, 0);
  const sumPayment = data
    .map((moneyDiary) => moneyDiary.payment)
    .reduce((prev, current) => {
      return prev + current;
    }, 0);

  return (
    <Table>
      <thead className="bg-gray-800 h-14">
        <tr>
          <th className=" text-white" colSpan={1}>
            {new Date(data[0].date).getMonth() + 1}月
          </th>
          <th colSpan={1}></th>
          <th colSpan={4} className="text-right text-white">
            <p className="flex float-right">
              <span className="px-2">収入 {sumWithdrawal.toLocaleString()}(円)</span>
              <span className="px-2">支出 {sumPayment.toLocaleString()}(円)</span>
              <span className="px-2">
                収支
                <span className={minusColor(sumWithdrawal - sumPayment)}>
                  {(sumWithdrawal - sumPayment).toLocaleString()}
                </span>
                (円)
              </span>
            </p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-gray-100">
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
                <span className={minusColor(moneyDiary.withdrawal - moneyDiary.payment)}>
                  {(moneyDiary.withdrawal - moneyDiary.payment).toLocaleString()}
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
