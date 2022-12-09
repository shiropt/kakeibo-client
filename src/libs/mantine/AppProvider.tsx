import { MantineProvider, Loader } from "@mantine/core";
import { createContext, FC, ReactNode, useState } from "react";
import { useToggle } from "@mantine/hooks";
import { NotificationsProvider } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import { AlertModal } from "../../components/ui/modal";
import { store } from "../store";

type ContextType = {
  colorScheme: "light" | "dark";
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ContextType>({ colorScheme: "dark", toggleTheme: () => {} });
export const AppMantineProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [colorScheme, toggleTheme] = useToggle<"dark" | "light">(["light", "dark"]);
  const { isLoading } = store.loading();
  return (
    <ThemeContext.Provider value={{ colorScheme, toggleTheme }}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ dir: "rtl", colorScheme }}>
        {isLoading && <Loader className=" fixed top-64 left-2/4 z-10" />}
        <ModalsProvider modals={{ alert: AlertModal }} labels={{ confirm: "OK", cancel: "キャンセル" }}>
          <NotificationsProvider>{children}</NotificationsProvider>
        </ModalsProvider>
      </MantineProvider>
    </ThemeContext.Provider>
  );
};
