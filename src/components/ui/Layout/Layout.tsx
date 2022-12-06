import Head from "next/head";
import { FC, ReactNode, useCallback, useContext, useState } from "react";
import { Drawer, Menu, Text, Header } from "@mantine/core";
import { ThemeContext } from "../../../libs/mantine/AppProvider";
import { IconDots } from "@tabler/icons";
import { useRouter } from "next/router";
import { openConfirmModal } from "@mantine/modals";
import { signOut } from "../../../libs/firebase/auth";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { MoneyDiaryForm } from "../../ui/form/MoneyDiary/MoneyDiaryForm";
import { CirclePlus } from "tabler-icons-react";
import { moneyDiaryForm } from "../../../libs/mantine/useForm/moneyDiaryForm";

type Props = {
  children: ReactNode;
  title?: string;
};

export const Layout: FC<Props> = ({ children, title = "Next.js" }) => {
  const { openedDrawer, setOpenedDrawer } = moneyDiaryForm();
  // const [opened, setOpened] = useState(false);

  const { toggleTheme } = useContext(ThemeContext);
  const { largeScreen } = useMediaQuery();
  const router = useRouter();

  const onConfirm = useCallback(async () => {
    await signOut();
    router.push("/signin");
  }, []);
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header className=" fixed w-screen" height={60} p="xs">
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
                    onConfirm,
                  })
                }
              >
                ログアウト
              </Text>
            </Menu.Item>
            {!largeScreen && (
              <Menu.Item>
                <Text onClick={() => setOpenedDrawer(true)}>登録する</Text>
              </Menu.Item>
            )}
          </Menu.Dropdown>
          <Drawer position="right" opened={openedDrawer} onClose={() => setOpenedDrawer(false)} padding="md" size="xl">
            <MoneyDiaryForm />
          </Drawer>
        </Menu>
      </Header>
      <main className="min-h-screen pt-16">{children}</main>
    </div>
  );
};
