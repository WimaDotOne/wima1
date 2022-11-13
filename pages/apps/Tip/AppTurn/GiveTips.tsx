import Head from "next/head";
import { GiveTips } from "../../../../apps/Tip/F/TipApp/Public/GiveTips/GiveTips";
import { GatherWimaEnv } from "../../../../apps/Wima/F/WimaEnv/GatherWimaEnv";

export default function GiveTipsPage() {
  return(<>
    <Head>
      <title>Tip</title>
      <meta name="description" content="Tip" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <GiveTips />
    <GatherWimaEnv />
  </>)
}