/* eslint-disable */
export type MoneyDiaryGetResponse = {
  id: number;
  memo: string;
  withdrawal: number | null;
  payment: number | null;
  date: Date;
  period: number;
  expenseItemName: string;
  categories: { id: number; name: string }[];
  createdAt: string;
  updatedAt: string;
};

export type MoneyDiaryDto = {
  memo: string;
  withdrawal: number | null;
  payment: number | null;
  date: Date;
  period: number;
  expenseItemName: string;
  categories: number[];
};
