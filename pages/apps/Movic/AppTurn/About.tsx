import Head from "next/head";
import { About } from "../../../../apps/Movic/F/MovicApp/Public/About/About";

export default function LandingPage() {
  return(<>
    <Head>
      <title>Movic</title>
      <meta name="description" content="Movic" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <About />
  </>)
}