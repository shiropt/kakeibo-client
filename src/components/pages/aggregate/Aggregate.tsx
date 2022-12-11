import { FC } from "react";
import { MoneyDiaryForm } from "../../ui/form/MoneyDiary/MoneyDiaryForm";
import { Layout } from "../../ui/Layout";
import { SelectYearAndMonth } from "../../ui/select/SelectTwoPieces";
import { Grid } from "@mantine/core";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

export const Aggregate: FC = () => {
  const { largeScreen } = useMediaQuery();

  return (
    <Layout>
      <Grid grow>
        <Grid.Col span={7}>aggregate page</Grid.Col>
      </Grid>
    </Layout>
  );
};
