import React, {ReactNode, useContext, useState} from "react"

interface IEnvContext {
  domain?: string,
  setDomain: (domain: string)=>void
  movicScriptFileMaxLength?: number
  setMovicScriptFileMaxLength: (len: number)=>void
  textMaxPerChapter?: number
  setTextMaxPerChapter: (len: number)=>void
  quizQuestionsMaxLength?: number
  setQuizQuestionsMaxLength: (len: number)=>void
}

const EnvContext = React.createContext<IEnvContext | null>(null)

export function useWimaEnv() {
  const context = useContext(EnvContext)
  return  context
}

interface IWimaEnvContextProp {
  children: ReactNode
}

export function WimaEnvContext({
  children,
}: IWimaEnvContextProp) {

  const [domain, setDomain] = useState<string>("")
  const [movicScriptFileMaxLength, setMovicScriptFileMaxLength] = useState<number>(0)
  const [textMaxPerChapter, setTextMaxPerChapter] = useState<number>(0)
  const [quizQuestionsMaxLength, setQuizQuestionsMaxLength] = useState<number>(0)

  const context: IEnvContext = {
    domain, setDomain,
    movicScriptFileMaxLength, setMovicScriptFileMaxLength,
    textMaxPerChapter, setTextMaxPerChapter,
    quizQuestionsMaxLength, setQuizQuestionsMaxLength
  } 

  return(<>
    <EnvContext.Provider value={context}>
      {children}
    </EnvContext.Provider>
  </>)
}