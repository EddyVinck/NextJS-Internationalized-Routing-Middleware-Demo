import { type GetServerSideProps } from "next";
import Head from "next/head";
import { Navbar } from "../components/Navbar";

export default function About(props: { locale: string | undefined }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <h1>About</h1>
        <p>Locale: {props.locale}</p>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      locale,
    },
  };
};
