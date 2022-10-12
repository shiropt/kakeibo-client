import { Box, TextInput, NumberInput, Textarea, MultiSelect, Button, Radio } from "@mantine/core";
import { FC, useState } from "react";
import { SquareMinus, SquarePlus } from "tabler-icons-react";
import { DatePicker } from "@mantine/dates";
import { useForm, zodResolver } from "@mantine/form";

export const MoneyDiaryForm: FC = () => {
  const form = useForm<{ name: string }>({ initialValues: { name: "" } });
  const [selectAmount, setSelectAmount] = useState("出金");
  return (
    <form className=" border-2 mt-4 mr-2 border-gray-100 p-4">
      <div className="flex">
        <p className=" mt-1 mr-2 w-20">費目名</p>
        <TextInput className=" mb-4 w-80" placeholder="費目名を入力" />
      </div>
      <div className=" flex">
        <p className=" mt-1 mr-2 w-20">金額</p>
        <Radio.Group size="sm" spacing="xs" onChange={setSelectAmount} value={selectAmount}>
          <Radio value="出金" label="出金" className=" w-16" />
          <Radio value="入金" label="入金" />
        </Radio.Group>
        <NumberInput hideControls className=" ml-2 mb-4  w-44" placeholder={`${selectAmount}額を入力`} />
      </div>

      <div className=" flex">
        <p className=" mt-1 mr-2 w-20">日付</p>
        <DatePicker className=" mb-4  w-80" placeholder="日付を選択" />
      </div>
      <div className=" flex">
        <p className=" mt-1 mr-2 w-20">カテゴリ</p>
        <MultiSelect
          data={["食費", "給与", "家賃", "貯金", "臨時収入", "交際費"]}
          className=" mb-4  w-80"
          placeholder="カテゴリを入力"
          searchable
          nothingFound="Nothing found"
        />
      </div>
      <div className=" flex">
        <p className=" mt-1 mr-2 w-20">メモ</p>
        <Textarea placeholder="メモを入力" className=" mb-4  w-80" />
      </div>
      <div>
        <Button type="submit" fullWidth size="md" color="red" className="">
          登録
        </Button>
      </div>
    </form>
  );
};
