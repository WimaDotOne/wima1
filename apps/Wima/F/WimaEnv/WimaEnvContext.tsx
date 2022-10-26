import React, {ReactNode, useContext, useState} from "react"

interface IEnvContext {
  domain?: string,
  setDomain: (domain: string)=>void
  movicScriptFileMaxLength?: number
  setMovicScriptFileMaxLength: (len: number)=>void
  textMaxPerChapter?: number
  setTextMaxPerChapter: (len: number)=>void
  googlePlacesApiId?: string,
  setGooglePlacesApiId: (id: string)=>void
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
  const [googlePlacesApiId, setGooglePlacesApiId] = useState<string>("")

  const context: IEnvContext = {
    domain, setDomain,
    movicScriptFileMaxLength, setMovicScriptFileMaxLength,
    textMaxPerChapter, setTextMaxPerChapter,
    googlePlacesApiId, setGooglePlacesApiId
  } 

  return(<>
    <EnvContext.Provider value={context}>
      {children}
    </EnvContext.Provider>
  </>)
}