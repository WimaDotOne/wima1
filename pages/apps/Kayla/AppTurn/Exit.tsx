import Head from "next/head";
import { KaylaWimaCircle } from "../../../../apps/Kayla/F/KaylaApp/KaylaWimaCirlcle/KaylaWimaCircle";

export default function WimaCirclePage() {
  return(<>
    <Head>
      <title>Kayla</title>
      <meta name="description" content="Kayla" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <KaylaWimaCircle />
  </>)
}