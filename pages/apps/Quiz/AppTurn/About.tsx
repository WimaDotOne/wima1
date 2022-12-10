import Head from "next/head";
import { About } from "../../../../apps/Movic/F/MovicApp/Public/About/About";

export default function AboutPage() {
  return(<>
    <Head>
      <title>About</title>
      <meta name="description" content="Quiz" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <About />
  </>)
}