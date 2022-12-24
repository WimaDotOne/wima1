import QuizQuiz from "../../Model/QuizQuiz.js"

//Used after asyGetMyQuizChapter is used so that chapterId can be trusted to belong to login user.
export async function asyGetMyQuizQuiz(req, quizId, chapterId) {

  if(!quizId) {
    throw new Error("Quiz id is empty")
  }

  if(!chapterId) {
    throw new Error("Chapter id is empty")
  }

  const quiz = await QuizQuiz.findById(quizId)

  if(!quiz) {
    throw new Error("Cannot find quiz")
  }

  if(!quiz.quizChapterId) {
    throw new Error("Quiz does not have chapter Id weird!")
  }

  if(quiz.quizChapterId.toString() !== chapterId.toString()) {
    throw new Error("Quiz does not match quiz account")
  }

  return quiz
}