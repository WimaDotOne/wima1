import Head from "next/head";
import { MovicWimaCircle } from "../../../../apps/Movic/F/MovicApp/Public/MovicWimaCircle/MovicWimaCircle";

export default function WimaCirclePage() {
  return(<>
    <Head>
      <title>Movic</title>
      <meta name="description" content="Movic" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MovicWimaCircle />
  </>)
}