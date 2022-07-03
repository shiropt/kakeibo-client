import Head from "next/head";
import { Header } from "@mantine/core";
import { FC, ReactNode, useContext } from "react";
import { ThemeIcon, Anchor, Box } from "@mantine/core";
import { MoonOff, Moon } from "tabler-icons-react";
import { ThemeContext } from "../../../libs/mantine/AppProvider";

type Props = {
  children: ReactNode;
  title?: string;
};

export const Layout: FC<Props> = ({ children, title = "Next.js" }) => {
  const { colorScheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className=" flex justify-center items-center flex-col min-h-screen font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <Header className=" w-screen" height={80} p="xs">
        <ThemeIcon
          data-testid="icon"
          className="cursor-pointer float-right mt-2 mr-2"
          variant="outline"
          size="xl"
          color="gray"
          onClick={() => toggleTheme()}
        >
          {colorScheme === "dark" ? <Moon data-testid="moon" /> : <MoonOff data-testid="moon-off" />}
        </ThemeIcon>
      </Header>
      <main className="flex justify-center items-center flex-col min-h-screen font-mono">{children}</main>
    </div>
  );
};
