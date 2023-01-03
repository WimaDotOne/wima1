import Head from "next/head"
import { About } from "../../../../apps/Quiz/F/QuizApp/Public/About/About"

export default function AboutPage() {
  return(<>
    <Head>
      <title>Quiz</title>
      <meta name="description" content="Quiz" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <About />
  </>)
}