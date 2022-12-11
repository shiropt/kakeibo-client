import { FC } from "react";
import { MoneyDiaryForm } from "../../ui/form/MoneyDiary/MoneyDiaryForm";
import { Layout } from "../../ui/Layout";
import { SelectYearAndMonth } from "../../ui/select/SelectTwoPieces";
import { Grid } from "@mantine/core";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { MoneyDiaryList } from "../../ui/list/moneyDiary/MoneyDiaryList";

export const Home: FC = () => {
  const { largeScreen } = useMediaQuery();

  return (
    <Layout>
      <Grid grow>
        <Grid.Col span={7}>
          <div className=" float-right mt-4 mr-2 p-4">
            <SelectYearAndMonth />
          </div>
          <MoneyDiaryList />
        </Grid.Col>
        {largeScreen && (
          <Grid.Col span={2}>
            <MoneyDiaryForm />
          </Grid.Col>
        )}
      </Grid>
    </Layout>
  );
};
