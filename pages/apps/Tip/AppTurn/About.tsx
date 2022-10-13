import Head from "next/head";
import { Landing } from "../../../../apps/Tip/F/TipApp/Landing/Landing";

export default function AboutPage() {
  return(<>
    <Head>
      <title>Tip</title>
      <meta name="description" content="Tip" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Landing />
  </>)
}