/* eslint-disable */
export type MoneyDiaryDto = {
  id: number;
  memo: string;
  withdrawal: number;
  payment: number;
  date: string;
  period: number;
  expenseItemName: string;
  categories: { id: number; name: string }[];
  createdAt: string;
  updatedAt: string;
};
