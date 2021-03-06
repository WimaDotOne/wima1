import Head from "next/head";
import { SocialWimaCircle } from "../../../../apps/Social/F/SocialApp/Public/SocialWimaCirlcle/SocialWimaCircle";

export default function WimaCirclePage() {
  return(<>
    <Head>
      <title>Sociable</title>
      <meta name="description" content="Sociable" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <SocialWimaCircle />
  </>)
}