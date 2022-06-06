import Head from "next/head";
import { About } from "../../../../apps/Social/F/SocialApp/Public/About/About";

export default function AboutPage() {
  return(<>
    <Head>
      <title>Social</title>
      <meta name="description" content="Social" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <About />
  </>)
}