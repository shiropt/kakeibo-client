import Head from "next/head";
import { FC, ReactNode, useCallback, useContext, useState } from "react";
import { Drawer, Menu, Text, Header, Tabs } from "@mantine/core";
import { ThemeContext } from "../../../libs/mantine/AppProvider";
import { IconDots } from "@tabler/icons";
import { useRouter } from "next/router";
import { openConfirmModal } from "@mantine/modals";
import { signOut } from "../../../libs/firebase/auth";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { MoneyDiaryForm } from "../../ui/form/MoneyDiary/MoneyDiaryForm";
import { moneyDiaryForm } from "../../../libs/mantine/useForm/moneyDiaryForm";
import { IconBusinessplan, IconSettings, IconChartBar, IconChartPie2 } from "@tabler/icons";

type Props = {
  children: ReactNode;
  title?: string;
};

export const Layout: FC<Props> = ({ children, title = "Next.js" }) => {
  const { openedDrawer, setOpenedDrawer } = moneyDiaryForm();
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
      <header className="fixed flex border-b-2 justify-between w-screen">
        {/* <Menu closeOnItemClick={false} shadow="md" width={200} trigger="hover" openDelay={100} closeDelay={400}>
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
                    size: "auto",
                    withCloseButton: false,
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
        </Menu> */}

        <Tabs
          color="red"
          variant="pills"
          radius="xs"
          pt={8}
          value={router.query.activeTab as string}
          onTabChange={(value) => router.push(`${value}`)}
        >
          <Tabs.List pl={190}>
            <Tabs.Tab px="xl" value="year" icon={<IconChartBar size={20} />}>
              年間収支
            </Tabs.Tab>
            <Tabs.Tab px="xl" value="/" icon={<IconChartPie2 size={20} />}>
              月間収支
            </Tabs.Tab>
            <Tabs.Tab px="xl" value="assets" icon={<IconBusinessplan size={20} />}>
              資産
            </Tabs.Tab>
            <Tabs.Tab px="xl" value="settings" icon={<IconSettings size={20} />}>
              設定
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
        <Text
          onClick={() =>
            openConfirmModal({
              title: "ログアウトします",
              centered: true,
              size: "auto",
              withCloseButton: false,
              onCancel: () => {
                return;
              },
              onConfirm,
            })
          }
          className=" float-right p-4 mr-48 cursor-pointer  hover:opacity-60"
        >
          ログアウト
        </Text>
      </header>
      <main className="min-h-screen pt-16">
        <div className=" px-40 pt-4">{children}</div>
      </main>
    </div>
  );
};
