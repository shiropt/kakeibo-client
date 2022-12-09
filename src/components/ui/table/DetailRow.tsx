import { FC, useCallback } from "react";
import { useMoneyDiary } from "../../../hooks/useMoneyDiary";
import { Badge, Drawer, Menu } from "@mantine/core";
import { IconCopy, IconTrash, IconEdit, IconDots } from "@tabler/icons";
import { MoneyDiaryGetResponse } from "../../../../api/@types";
import { Repeat } from "tabler-icons-react";
import { store } from "../../../libs/store";
import { minusColor } from "../../../utils/common";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { MoneyDiaryForm } from "../form/MoneyDiary/MoneyDiaryForm";
import { moneyDiaryForm } from "../../../libs/mantine/useForm/moneyDiaryForm";

type Props = {
  moneyDiary: MoneyDiaryGetResponse;
};
export const DetailRow: FC<Props> = ({ moneyDiary }) => {
  const { setMoneyDiary, setMode } = store.moneyDiary();
  const { openDeleteModal } = useMoneyDiary();
  const { smallScreen } = useMediaQuery();
  const { openedDrawer, setOpenedDrawer } = moneyDiaryForm();

  const onClickEdit = useCallback(() => {
    setMode("EDIT");
    setMoneyDiary({
      id: moneyDiary.id,
      memo: moneyDiary.memo,
      withdrawal: moneyDiary.withdrawal,
      payment: moneyDiary.payment,
      date: new Date(moneyDiary.date),
      automaticRegistration: moneyDiary.automaticRegistration,
      expenseItemName: moneyDiary.expenseItemName,
      categories: moneyDiary.categories.map((category) => category.id).map(String),
    });
  }, [moneyDiary]);

  const onClickCopy = useCallback(() => {
    setMode("COPY");
    setMoneyDiary({
      id: moneyDiary.id,
      memo: moneyDiary.memo,
      withdrawal: moneyDiary.withdrawal,
      payment: moneyDiary.payment,
      date: new Date(moneyDiary.date),
      automaticRegistration: moneyDiary.automaticRegistration,
      expenseItemName: moneyDiary.expenseItemName,
      categories: moneyDiary.categories.map((category) => category.id).map(String),
    });
  }, [moneyDiary]);

  const detailRow = (
    <tr>
      <td>
        <p className="flex">
          {new Date(moneyDiary.date).getDate() + "日"}
          {moneyDiary.automaticRegistration && <Repeat className=" ml-2" size={18} strokeWidth={2} color={"green"} />}
        </p>
      </td>
      <td className="w-80">{moneyDiary.expenseItemName}</td>
      <td className="w-40">
        <span className={minusColor(moneyDiary.incomeAndExpenditure)}>
          ¥{moneyDiary.incomeAndExpenditure.toLocaleString()}
        </span>
      </td>
      <td className="w-96">{moneyDiary.memo}</td>
      <td className="w-44">
        {moneyDiary.categories.map((category) => (
          <Badge className="mx-2" key={category.id}>
            {category.name}
          </Badge>
        ))}
      </td>
      <td className="w-14">
        <Menu shadow="md" width={100} trigger="hover" openDelay={100} closeDelay={400}>
          <Menu.Target>
            <p className="mr-2 cursor-pointer">
              <IconDots size={14} />
            </p>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item onClick={onClickEdit} icon={<IconEdit size={14} />}>
              編集
            </Menu.Item>
            <Menu.Item onClick={onClickCopy} icon={<IconCopy size={14} />}>
              複製
            </Menu.Item>
            <Menu.Item
              onClick={() => openDeleteModal(moneyDiary.expenseItemName, moneyDiary.id)}
              icon={<IconTrash size={14} />}
            >
              削除
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </td>
    </tr>
  );

  const mobileDetailRow = (
    <tr>
      <td colSpan={4}>
        <div>
          <div className="flex">
            <div className="">
              <p className="pl-2">{new Date(moneyDiary.date).getDate() + "日"}</p>
              <div className="flex w-36 pl-2 pb-2">
                <p className="flex">
                  {moneyDiary.expenseItemName}
                  {moneyDiary.automaticRegistration && <Repeat className="mt-1" size={16} color={"green"} />}
                </p>
              </div>
              <p>
                {moneyDiary.categories.map((category) => (
                  <Badge className="mx-2" key={category.id}>
                    {category.name}
                  </Badge>
                ))}
              </p>
            </div>
            <div className="p-2 mt-4">
              <p className={minusColor(moneyDiary.incomeAndExpenditure)}>
                ¥{moneyDiary.incomeAndExpenditure.toLocaleString()}
              </p>
              <p className=" mt-2">{moneyDiary.memo}</p>
            </div>
          </div>
          <p className="flex justify-end mr-4">
            <IconEdit size={20} onClick={onClickEdit} />
            <IconCopy className=" mx-8" size={20} onClick={onClickCopy} />
            <IconTrash size={20} onClick={() => openDeleteModal(moneyDiary.expenseItemName, moneyDiary.id)} />
          </p>
        </div>
      </td>
      <Drawer position="bottom" opened={openedDrawer} onClose={() => setOpenedDrawer(false)} padding="md" size="95%">
        <MoneyDiaryForm closeDrawer={() => setOpenedDrawer(false)} />
      </Drawer>
    </tr>
  );

  return smallScreen ? mobileDetailRow : detailRow;
};
