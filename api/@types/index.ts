/* eslint-disable */
export type MoneyDiaryGetResponse = {
  id: number;
  memo: string;
  withdrawal: number;
  payment: number;
  incomeAndExpenditure: number;
  date: Date;
  automaticRegistration: boolean;
  expenseItemName: string;
  categories: { id: number; name: string }[];
  createdAt: string;
  updatedAt: string;
};

export type MoneyDiaryDto = {
  memo: string;
  withdrawal: number;
  payment: number;
  date: Date;
  automaticRegistration: boolean;
  expenseItemName: string;
  categories: (string | number)[];
};

export type CreateCategoryDto = {};

export type Category = {
  id: number;
  name: string;
};

export type UpdateCategoryDto = {};
