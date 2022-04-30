import React, {Dispatch, ReactNode, SetStateAction, useContext, useState} from "react"
import { Dimension } from "../../CSS/Dimension"

export interface IWindowContext {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>> // in order to setValue with a function to set value based on previous value
  viewId: string
  setViewId: (viewId: string)=>void
  smartOpen: ()=>void
}

const WindowContext = React.createContext<IWindowContext | null>(null)

export function useAppleWindow() {
  const context = useContext(WindowContext)
  return  context
}

interface IAppleWindowContextProp {
  children: ReactNode
}

export function AppleWindowContext({
  children,
}: IAppleWindowContextProp) {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [viewId, setViewId] = useState<string>("")

  function smartOpen() {
    if(window) {
      //use min-width because css use min-width. max-width will cause inconsistency in boundry case
      if(window.matchMedia(`(min-width: ${Dimension.maxPhoneHeight})`).matches) {
        setIsOpen(true)
      }
    }
  }

  const context: IWindowContext = {
    isOpen,
    setIsOpen,
    viewId,
    setViewId,
    smartOpen
  } 

  return(<>
    <WindowContext.Provider value={context}>
      {children}
    </WindowContext.Provider>
  </>)
}