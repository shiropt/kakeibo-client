import { FC } from "react";
import { Layout } from "../../ui/Layout";

export const Home: FC = () => {
  return (
    <Layout>
      <h1 className=" text-red-500">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </Layout>
  );
};
