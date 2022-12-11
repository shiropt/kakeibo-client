/* eslint-disable */
export type UserLoginDto = {
  username: string;
  password: string;
};

export type LoginResponse = {
  access_token: string;
};

export type UserCreateDto = {
  uid: string;
  email: string;
};

export type Category = {
  id: number;
  name: string;
};

export type MoneyDiaryGetResponse = {
  id: number;
  memo: string;
  withdrawal: number;
  payment: number;
  incomeAndExpenditure: number;
  date: string;
  automaticRegistration: boolean;
  expenseItemName: string;
  categories: Category[];
  createdAt: string;
  updatedAt: string;
};

export type Comprehensive = {
  withdrawal: number;
  payment: number;
  incomeAndExpenditure: number;
};

export type Aggregate = {
  date: string;
  withdrawal: number;
  payment: number;
  incomeAndExpenditure: number;
};

export type AggregateResponse = {
  comprehensive: Comprehensive;
  aggregateByYear: Aggregate;
  aggregateByMonth: Aggregate;
};

export type MoneyDiaryDto = {
  memo: string;
  withdrawal: number;
  payment: number;
  date: Date;
  automaticRegistration: boolean;
  expenseItemName: string;
  categories: string[];
};

export type MoneyDiary = {
  id: number;
  memo: string | null;
  withdrawal: number;
  payment: number;
  date: string;
  automaticRegistration: boolean;
  userId: number;
  expenseItemName: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateCategoryDto = {};

export type UpdateCategoryDto = {};
