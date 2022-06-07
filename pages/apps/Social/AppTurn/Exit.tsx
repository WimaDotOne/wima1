import Head from "next/head";
import { SocialWimaCircle } from "../../../../apps/Social/F/SocialApp/Public/SocialWimaCirlcle/SocialWimaCircle";

export default function WimaCirclePage() {
  return(<>
    <Head>
      <title>Social</title>
      <meta name="description" content="Social" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <SocialWimaCircle />
  </>)
}