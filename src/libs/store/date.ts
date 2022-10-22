import create from "zustand";
import { devtools } from "zustand/middleware";
type State = {
  year: string;
  month: string;
  setYear: (year: string) => void;
  setMonth: (month: string) => void;
};

export const useDateStore = create<State>()(
  devtools((set, get) => ({
    year: new Date().getFullYear().toString(),
    month: (new Date().getMonth() + 1).toString(),
    setYear: (year) => {
      set({ year });
    },
    setMonth: (month) => {
      set({ month });
    },
  }))
);
