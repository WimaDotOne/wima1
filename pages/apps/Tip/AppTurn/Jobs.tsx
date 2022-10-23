import Head from "next/head";
import { Jobs } from "../../../../apps/Tip/F/TipApp/Attendant/Jobs/Jobs";
import { IsWimaUserLogin } from "../../../../apps/Wima/fWima";

export default function JobsPage() {
  return(<>
    <Head>
      <title>Tip</title>
      <meta name="description" content="Tip" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <IsWimaUserLogin />
    <Jobs />
  </>)
}