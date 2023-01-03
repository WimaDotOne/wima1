import Head from "next/head";
import { QuizWimaCircle } from "../../../../apps/Quiz/F/QuizApp/Public/QuizWimaCircle/QuizWimaCircle";

export default function WimaCirclePage() {
  return(<>
    <Head>
      <title>Quiz</title>
      <meta name="description" content="Quiz" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <QuizWimaCircle />
  </>)
}