import Head from "next/head";
import { LeftMenu } from "../components/LeftMenu";
import { TopMenu } from "../components/TopMenu";
import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LeftMenu />
      <TopMenu />
    </div>
  );
}
