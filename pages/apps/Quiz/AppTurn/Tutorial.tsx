import Head from "next/head";
import { Tutorial } from "../../../../apps/Quiz/F/QuizApp/Public/Tutorial/Tutorial";

export default function TutorialPage() {
  return(<>
    <Head>
      <title>Movic</title>
      <meta name="description" content="Movic" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Tutorial />
  </>)
}