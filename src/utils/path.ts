const baseUrl = "http://localhost:3000/api/v1/";

export const API = {
  moneyDiaries: `${baseUrl}money-diary`,
  moneyDiariesByYear: `${baseUrl}money-diary/search?`,
  user: `${baseUrl}user`,
} as const;
