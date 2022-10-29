import create from "zustand";
import { devtools } from "zustand/middleware";
import { MoneyDiaryDto } from "../../../api/@types";

type Mode = "NEW" | "EDIT" | "COPY";
type State = {
  moneyDiary: MoneyDiaryDto & { id: number };
  mode: Mode;
  setMoneyDiary: (moneyDiary: MoneyDiaryDto & { id: number }) => void;
  resetMoneyDiary: VoidFunction;
  setMode: (mode: Mode) => void;
};

export const useMoneyDiaryStore = create<State>()(
  devtools((set, get) => ({
    moneyDiary: {
      id: 0,
      memo: "",
      withdrawal: 0,
      payment: 0,
      date: new Date(),
      automaticRegistration: false,
      expenseItemName: "",
      categories: [],
    },
    mode: "NEW",
    setMoneyDiary: (moneyDiary) => {
      set({ moneyDiary });
    },
    resetMoneyDiary: () => {
      set({
        moneyDiary: {
          id: 0,
          memo: "",
          withdrawal: 0,
          payment: 0,
          date: new Date(),
          automaticRegistration: false,
          expenseItemName: "",
          categories: [],
        },
      });
    },
    setMode: (mode) => {
      set({ mode });
    },
  }))
);
