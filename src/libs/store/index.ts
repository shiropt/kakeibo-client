import { moneyDiary } from "./moneyDiary";
import { loading } from "./loading";
import { search } from "./search";
import { user } from "./user";

export const store = {
  moneyDiary,
  loading,
  search,
  user,
} as const;
