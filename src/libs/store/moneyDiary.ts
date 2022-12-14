import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { MoneyDiaryDto } from "../../../api/@types";

type Mode = "NEW" | "EDIT" | "COPY";
type State = {
  moneyDiary: MoneyDiaryDto & { id: number };
  mode: Mode;
  setMoneyDiary: (moneyDiary: MoneyDiaryDto & { id: number }) => void;
  resetMoneyDiary: VoidFunction;
  setMode: (mode: Mode) => void;
};

const useStore = create<State>()(
  devtools(
    persist((set, get) => ({
      moneyDiary: {
        id: 0,
        memo: "",
        withdrawal: "",
        payment: "",
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
            withdrawal: "",
            payment: "",
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
  )
);

export const moneyDiary = useStore;
