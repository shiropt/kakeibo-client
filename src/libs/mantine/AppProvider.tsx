import { MantineProvider } from "@mantine/core";
import { createContext, FC, ReactNode, useState } from "react";
import { useToggle } from "@mantine/hooks";
import { NotificationsProvider } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";

type ContextType = {
  colorScheme: "light" | "dark";
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ContextType>({ colorScheme: "dark", toggleTheme: () => {} });
export const AppMantineProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [colorScheme, toggleTheme] = useToggle<"dark" | "light">(["light", "dark"]);

  return (
    <ThemeContext.Provider value={{ colorScheme, toggleTheme }}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ dir: "rtl", colorScheme }}>
        <ModalsProvider labels={{ confirm: "OK", cancel: "キャンセル" }}>
          <NotificationsProvider>{children}</NotificationsProvider>
        </ModalsProvider>
      </MantineProvider>
    </ThemeContext.Provider>
  );
};
