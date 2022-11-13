import { Button, LoadingOverlay, MantineProvider, Text, Loader } from "@mantine/core";
import { createContext, FC, ReactNode, useState } from "react";
import { useToggle } from "@mantine/hooks";
import { NotificationsProvider } from "@mantine/notifications";
import { ContextModalProps, ModalsProvider } from "@mantine/modals";
import { useLoadingStore } from "../store/loading";

type ContextType = {
  colorScheme: "light" | "dark";
  toggleTheme: () => void;
};
const AlertModal = ({ context, id, innerProps }: ContextModalProps<{ modalBody: string }>) => (
  <div className=" text-center">
    <Text className=" text-center" size="sm">
      {innerProps.modalBody}
    </Text>
    <Button fullWidth mt="xs" onClick={() => context.closeAll()}>
      OK
    </Button>
  </div>
);
export const ThemeContext = createContext<ContextType>({ colorScheme: "dark", toggleTheme: () => {} });
export const AppMantineProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [colorScheme, toggleTheme] = useToggle<"dark" | "light">(["light", "dark"]);
  const { isLoading } = useLoadingStore();

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
