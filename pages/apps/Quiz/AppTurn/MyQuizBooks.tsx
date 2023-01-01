import Head from 'next/head'
import { MyQuizBooks } from '../../../../apps/Quiz/F/QuizApp/My/MyQuizBooks/MyQuizBooks'
import { GatherWimaEnv } from '../../../../apps/Wima/F/WimaEnv/GatherWimaEnv'
import { IsWimaUserLogin } from '../../../../apps/Wima/fWima'

export default function MyQuizBookPage() {
  return (<>
    <Head>
      <title>Quiz</title>
      <meta name="description" content="Quiz" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0"></meta>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <IsWimaUserLogin />
    <GatherWimaEnv />
    <MyQuizBooks />
  </>)
}
