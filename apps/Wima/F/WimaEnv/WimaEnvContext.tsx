import React, {ReactNode, useContext, useState} from "react"

interface IMovicEnv {
  scriptFileMaxLength?: number
  domain?: string
}

interface IEnvContext {
  movicEnv?: IMovicEnv
  setMovicEnv: (movicEnv: IMovicEnv)=>void
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

  const [movicEnv, setMovicEnv] = useState<IMovicEnv>()

  const context: IEnvContext = {
    movicEnv,
    setMovicEnv
  } 

  return(<>
    <EnvContext.Provider value={context}>
      {children}
    </EnvContext.Provider>
  </>)
}