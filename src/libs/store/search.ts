import create from "zustand";
import { devtools, persist } from "zustand/middleware";

type State = {
  year: string;
  month: string;
  orderByDate: "asc" | "desc";
  orderByIncomeAndExpenditure: "withdrawal" | "payment" | "";
  setYear: (year: string) => void;
  setMonth: (month: string) => void;
  setOrderByDate: () => void;
  setOrderByIncomeAndExpenditure: () => void;
  resetOrderByIncomeAndExpenditure: () => void;
};

export const useSearchStore = create<State>()(
  devtools(
    persist((set, get) => ({
      year: new Date().getFullYear().toString(),
      month: (new Date().getMonth() + 1).toString(),
      orderByDate: "asc",
      orderByIncomeAndExpenditure: "",
      setYear: (year) => {
        set({ year });
      },
      setMonth: (month) => {
        set({ month });
      },
      setOrderByDate: () => {
        const orderByDate = get().orderByDate === "asc" ? "desc" : "asc";
        set({ orderByDate });
      },
      setOrderByIncomeAndExpenditure: () => {
        const now = get().orderByIncomeAndExpenditure;
        const orderByIncomeAndExpenditure = now === "" ? "payment" : now === "payment" ? "withdrawal" : "payment";
        set({ orderByIncomeAndExpenditure });
      },
      resetOrderByIncomeAndExpenditure: () => {
        set({ orderByIncomeAndExpenditure: "" });
      },
    }))
  )
);
