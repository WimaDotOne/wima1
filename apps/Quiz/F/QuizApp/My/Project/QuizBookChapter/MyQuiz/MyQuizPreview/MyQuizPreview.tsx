import { SingleQuizPlayer } from "../../../../../QuizPlayer/SingleQuizPlayer/SingleQuizPlayer"

interface IMyQuizPreviewProp {
  quizId: string
  backToQuizHome: ()=>void
}

export function MyQuizPreview({
  quizId,
  backToQuizHome
}: IMyQuizPreviewProp) {
  return(<>
    <SingleQuizPlayer quizId={quizId} 
      onBack={backToQuizHome}/>
  </>)
}