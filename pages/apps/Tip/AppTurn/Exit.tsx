import Head from "next/head";
import { TipWimaCircle } from "../../../../apps/Tip/F/TipApp/Public/TipWimaCirlcle/TipWimaCircle";

export default function WimaCirclePage() {
  return(<>
    <Head>
      <title>Tip</title>
      <meta name="description" content="Tip" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <TipWimaCircle />
  </>)
}