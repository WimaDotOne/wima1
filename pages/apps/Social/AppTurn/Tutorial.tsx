import Head from "next/head";
import { Tutorial } from "../../../../apps/Social/F/SocialApp/Public/Tutorial/Tutorial";

export default function TutorialPage() {
  return(<>
    <Head>
      <title>Sociable</title>
      <meta name="description" content="Sociable" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Tutorial />
  </>)
}