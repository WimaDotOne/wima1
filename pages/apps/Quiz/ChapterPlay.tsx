import { useRouter } from 'next/router'
import { ChapterQuizPlayer } from '../../../apps/Quiz/F/QuizApp/QuizPlayer/ChapterQuizPlayer/ChapterQuizPlayer'

export default function MovicPlay() {

  const router = useRouter()
  const chapterId = router.query.chapterId as string

  function back() {
    router.push("/")
  }
  return (<>
  <ChapterQuizPlayer chapterId={chapterId} onBack={back}/>
  </>)
}
