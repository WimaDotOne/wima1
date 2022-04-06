import cl from './Shield.module.css'
import React, {ReactNode, useContext, useRef} from "react"

interface IShieldContext {
  shield: (show: boolean)=>void
}

const ShieldContext = React.createContext<IShieldContext | null>(null)

export function useShield() {
  const context = useContext(ShieldContext)
  if(!context) return (show: boolean)=>{}
  return  context.shield //returns function shield
}

interface IShieldProviderProp {
  children: ReactNode
}

export function ShieldProvider({children}: IShieldProviderProp) {

  const loadingRef = useRef<HTMLDivElement>(null)
  const shieldRef = useRef<number>(0)

  const context: IShieldContext = {

    shield: (show: boolean) => {
      if(!loadingRef || !loadingRef.current) { return }
      if(show) {
        shieldRef.current++
      } else {
        shieldRef.current--
      }
      loadingRef.current.className = shieldRef.current>0?"":cl.noDisp
    }
  } 

  return(<>
    <ShieldContext.Provider value={context}>
      {children}
      <div className={cl.noDisp} ref={loadingRef}>
        <div className={cl.shield} >
          <div className={cl.loadingIcon} style={{backgroundImage:'url(/loading.gif)'}}>
            <div className={cl.loadingText}>Waiting...</div>
          </div>
        </div>
      </div>
    </ShieldContext.Provider>
  </>)
}