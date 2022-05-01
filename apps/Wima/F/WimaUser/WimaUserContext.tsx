import React, {ReactNode, useContext, useState} from "react"

export interface IUserContext {
  isLoggedIn: boolean
  setIsLoggedIn: (isLoggedIn: boolean)=>void
}

const UserContext = React.createContext<IUserContext | null>(null)

export function useWimaUser() {
  const context = useContext(UserContext)
  return  context
}

interface IWimaUserContextProp {
  children: ReactNode
}

export function WimaUserContext({
  children,
}: IWimaUserContextProp) {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  const context: IUserContext = {
    isLoggedIn,
    setIsLoggedIn
  } 

  return(<>
    <UserContext.Provider value={context}>
      {children}
    </UserContext.Provider>
  </>)
}