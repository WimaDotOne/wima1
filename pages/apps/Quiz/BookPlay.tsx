import Head from 'next/head'
import { useRouter } from 'next/router'
import { BookQuizPlayer } from '../../../apps/Quiz/F/QuizApp/QuizPlayer/BookQuizPlayer/BookQuizPlayer'

export default function ChapterPlay() {

  const router = useRouter()
  const bookId = router.query.bookId as string

  function back() {
    router.push("/")
  }
  return (<>
  <Head>
    <title>Quiz</title>
    <meta name="description" content="Quiz" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <BookQuizPlayer bookId={bookId} onBack={back}/>
  </>)
}
