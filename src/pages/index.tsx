import { createContext, Dispatch, SetStateAction } from "react";
import { Layout } from "../components/ui/Layout";

export default function Home() {
  const setCountContext = createContext<Dispatch<SetStateAction<string>>>(() => undefined);
  return (
    <Layout>
      <h1 className=" text-red-500">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </Layout>
  );
}
