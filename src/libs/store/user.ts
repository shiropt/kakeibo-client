import create from "zustand";
import { devtools, persist } from "zustand/middleware";

type State = {
  accessToken: string;
  setAccessToken: (accessToken: string) => void;
};

export const useUserStore = create<State>()(
  devtools(
    persist((set) => ({
      accessToken: "",
      setAccessToken: (accessToken) => {
        set({ accessToken });
      },
    }))
  )
);
