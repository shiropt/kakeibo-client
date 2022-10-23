import { FC } from "react";
import { MoneyDiaryGetResponse } from "../../../../api/@types";
import { useMoneyDiary } from "../../../hooks/useMoneyDiary";
import { Badge, Menu } from "@mantine/core";
import { IconCopy, IconTrash, IconEdit, IconDots } from "@tabler/icons";
import { useMoneyDiaryStore } from "../../../libs/store/moneyDiary";

type Props = {
  moneyDiary: MoneyDiaryGetResponse;
};
export const DetailRow: FC<Props> = ({ moneyDiary }) => {
  const { setMoneyDiary, setMode } = useMoneyDiaryStore();
  const { minusColor, openDeleteModal } = useMoneyDiary();

  const onClickEdit = () => {
    setMode("EDIT");
    setMoneyDiary({
      id: moneyDiary.id,
      memo: moneyDiary.memo,
      withdrawal: moneyDiary.withdrawal,
      payment: moneyDiary.payment,
      date: new Date(moneyDiary.date),
      period: moneyDiary.period,
      expenseItemName: moneyDiary.expenseItemName,
      categories: moneyDiary.categories.map((category) => category.id).map(String),
    });
  };

  const onClickCopy = () => {
    setMode("COPY");
    setMoneyDiary({
      id: moneyDiary.id,
      memo: moneyDiary.memo,
      withdrawal: moneyDiary.withdrawal,
      payment: moneyDiary.payment,
      date: new Date(moneyDiary.date),
      period: moneyDiary.period,
      expenseItemName: moneyDiary.expenseItemName,
      categories: moneyDiary.categories.map((category) => category.id).map(String),
    });
  };

  return (
    <tr>
      <td className="w-20">{new Date(moneyDiary.date).getDate() + "日"}</td>
      <td className="w-80">{moneyDiary.expenseItemName}</td>
      <td className="w-40">
        <span className={minusColor(moneyDiary.withdrawal || 0 - (moneyDiary.payment || 0))}>
          {(moneyDiary.withdrawal || 0 - (moneyDiary.payment || 0)).toLocaleString()}
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
};
