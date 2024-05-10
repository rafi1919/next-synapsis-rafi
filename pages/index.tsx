import { NextPage } from "next";
import Head from "next/head";
import LandingView from "./LandingPage/view";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gread-Blog</title>
        <meta name="description" content="Generated by Create Next Stack." />
      </Head>
      <LandingView />
    </>
  );
};

export default Index;
