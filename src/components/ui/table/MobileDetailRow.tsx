import { FC } from "react";
import { useMoneyDiary } from "../../../hooks/useMoneyDiary";
import { Badge, Card, Drawer } from "@mantine/core";
import { IconCopy, IconTrash, IconEdit, IconDots } from "@tabler/icons";
import { useMoneyDiaryStore } from "../../../libs/store/moneyDiary";
import { MoneyDiaryGetResponse } from "../../../../api/@types";
import { Repeat } from "tabler-icons-react";
import { moneyDiaryForm } from "../../../libs/mantine/useForm/moneyDiaryForm";
import { MoneyDiaryForm } from "../form/MoneyDiary/MoneyDiaryForm";

type Props = {
  moneyDiary: MoneyDiaryGetResponse;
};
export const MobileDetailRow: FC<Props> = ({ moneyDiary }) => {
  const { setMoneyDiary, setMode } = useMoneyDiaryStore();
  const { minusColor, openDeleteModal } = useMoneyDiary();
  const { openedDrawer, setOpenedDrawer } = moneyDiaryForm();

  const onClickEdit = () => {
    setMode("EDIT");
    setOpenedDrawer(true);
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
  };

  const onClickCopy = () => {
    setMode("COPY");
    setOpenedDrawer(true);
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
  };

  return (
    <>
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
    </>
  );
};
