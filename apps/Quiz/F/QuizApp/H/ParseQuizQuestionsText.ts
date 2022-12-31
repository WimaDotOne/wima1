import { IQuizQuestion } from "../../Model/IQuizQuestion"

export function ParseQuizQuestionsText(text?: string) {
  if(!text) return []

  const lines = text.split("\n")
  const questions: Array<IQuizQuestion> = []

  let question: IQuizQuestion = {
    question: "",
    options: [],
    answer: 0
  }
  let optionCount = 0
  let lineType = LineType.Question
  let questionAdded = false
  
  for(const line of lines) {
    if(!line || !line.trim()) continue
    let opt1Flag = true
    if(IsStartWidth(line, "===")) {
      
      question = {
        question: "",
        options: [],
        answer: 0
      }
      lineType = LineType.Question
      questionAdded = false
      optionCount = 0
      continue
    }

    if(IsStartWidth(line, "-")) {
      lineType = LineType.Option
      optionCount += 1
      
      let opt1 = (line.split("-")[1] || "").trim()
      if(IsStartWidth(opt1, ">")) {
        opt1 = (opt1.split(">")[1] || "").trim()
        if(question.answer < 1) {
          question.answer = optionCount
        }
      }
      question.options.push(opt1)
      opt1Flag = true
    } else {
      opt1Flag = false
    }

    switch(lineType) {
      case LineType.Question:
        const qSpace = question.question ? " " : ""
        question.question += qSpace + line
        if(!questionAdded) {
          questions.push(question)
          questionAdded = true
        }
        break
      case LineType.Option:
        if(!opt1Flag) {
          question.options[optionCount] += " " + line
        }
        break
      default:
    }
  }
  return questions
}

function IsStartWidth(text: string, start: string) {
  if(!text || !text.trim() || !start) return false
  
  text = text.toLowerCase()
  start = start.toLowerCase()
  const startLen = start.length
  return text.substring(0, startLen) === start
}

const LineType = {
  Question: "Question",
  Option: "Option"
}