import create from "zustand";
import { devtools } from "zustand/middleware";

type State = {
  isLoading: boolean;
  toggleIsLoading: () => void;
};

const useStore = create<State>()(
  devtools((set, get) => ({
    isLoading: false,
    toggleIsLoading: () => {
      set({ isLoading: !get().isLoading });
    },
  }))
);

export const loading = useStore;
