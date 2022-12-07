import { FC } from "react";
import { MoneyDiaryForm } from "../../ui/form/MoneyDiary/MoneyDiaryForm";
import { Layout } from "../../ui/Layout";
import { MoneyDiaryTable } from "../../ui/table/MoneyDiaryTable";
import { SelectYearAndMonth } from "../../ui/select/SelectTwoPieces";
import { Grid } from "@mantine/core";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

export const Home: FC = () => {
  const { largeScreen } = useMediaQuery();

  return (
    <Layout>
      <Grid grow>
        <Grid.Col span={7}>
          <div className=" float-right mt-4 mr-2 p-4">
            <SelectYearAndMonth />
          </div>
          <MoneyDiaryTable />
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
