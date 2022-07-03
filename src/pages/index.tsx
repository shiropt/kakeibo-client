import Head from "next/head";
import Image from "next/image";

import styles from "@/pages/index.module.css";
import { Layout } from "../components/ui/Layout";

export default function Home() {
  return (
    <Layout>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </Layout>
  );
}
