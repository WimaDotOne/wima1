import Head from "next/head";
import { About } from "../../../../apps/Social/F/SocialApp/Public/About/About";

export default function AboutPage() {
  return(<>
    <Head>
      <title>Sociable</title>
      <meta name="description" content="Sociable" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <About />
  </>)
}