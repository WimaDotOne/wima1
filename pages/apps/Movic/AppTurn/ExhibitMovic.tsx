import Head from "next/head";
import { ExhibitMovic } from "../../../../apps/Movic/F/MovicApp/Public/ExhibitMovic/ExhibitMovic";

export default function ExhibitMovicPage() {
  return(<>
    <Head>
      <title>Movic</title>
      <meta name="description" content="Movic" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <ExhibitMovic />
  </>)
}