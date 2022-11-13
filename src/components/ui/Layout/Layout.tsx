import Head from "next/head";
import { FC, ReactNode, useContext } from "react";
import { LoadingOverlay, Menu, Text, Header } from "@mantine/core";
import { MoonOff, Moon } from "tabler-icons-react";
import { ThemeContext } from "../../../libs/mantine/AppProvider";
import { IconDots } from "@tabler/icons";
import { useRouter } from "next/router";
import { openConfirmModal } from "@mantine/modals";

type Props = {
  children: ReactNode;
  title?: string;
};

export const Layout: FC<Props> = ({ children, title = "Next.js" }) => {
  const { toggleTheme } = useContext(ThemeContext);
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header className=" w-screen" height={60} p="xs">
        <Menu closeOnItemClick={false} shadow="md" width={200} trigger="hover" openDelay={100} closeDelay={400}>
          <Menu.Target>
            <p className="mr-2 mt-2 cursor-pointer float-right">
              <IconDots size={24} />
            </p>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>
              <Text onClick={() => toggleTheme()}>テーマを変更</Text>
            </Menu.Item>
            <Menu.Item>
              <Text
                onClick={() =>
                  openConfirmModal({
                    title: "ログアウトします",
                    centered: true,
                    size: 230,
                    onCancel: () => {
                      return;
                    },
                    onConfirm: () => router.push("/signin"),
                  })
                }
              >
                ログアウト
              </Text>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Header>
      <main className="min-h-screen">{children}</main>
    </div>
  );
};
