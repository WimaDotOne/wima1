import Head from 'next/head'
import { useRouter } from 'next/router'
import { ChapterQuizPlayer } from '../../../apps/Quiz/F/QuizApp/QuizPlayer/ChapterQuizPlayer/ChapterQuizPlayer'

export default function ChapterPlay() {

  const router = useRouter()
  const chapterId = router.query.chapterId as string

  function back() {
    router.push("/")
  }
  return (<>
  <Head>
    <title>Quiz</title>
    <meta name="description" content="Quiz" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <ChapterQuizPlayer chapterId={chapterId} onBack={back}/>
  </>)
}
