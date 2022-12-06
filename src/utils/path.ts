export const baseURL = "http://localhost:3000";

export const API = {
  moneyDiaries: `${baseURL}/money-diary`,
  moneyDiariesByYear: `${baseURL}/money-diary/search?`,
  user: `${baseURL}/user`,
} as const;

export const getPath = () => {
  const searchMoneyDiary = (params: {
    year: string;
    month: string;
    orderByDate: "asc" | "desc";
    orderByIncomeAndExpenditure: "" | "payment" | "withdrawal";
  }) => {
    const { year, month, orderByDate, orderByIncomeAndExpenditure } = params;
    return `api/v1/money-diary/search?year=${year}&month=${month}&orderByDate=${orderByDate}&orderByIncomeAndExpenditure=${orderByIncomeAndExpenditure}`;
  };
  return { searchMoneyDiary };
};
