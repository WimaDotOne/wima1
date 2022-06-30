import Head from "next/head";
import { LingoWimaCircle } from "../../../../apps/Lingo/F/LingoApp/LingoWimaCirlcle/LingoWimaCircle";

export default function WimaCirclePage() {
  return(<>
    <Head>
      <title>Lingo</title>
      <meta name="description" content="Lingo" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <LingoWimaCircle />
  </>)
}