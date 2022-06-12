import { IQuickInfoPiece } from "../../../../Model/IQuickInfo"
import cl from "./QuickInfo.module.scss"

interface IQuickInfoProp {
  quickInfo: Array<IQuickInfoPiece>
}

export function QuickInfo({
  quickInfo
}: IQuickInfoProp) {

  quickInfo = quickInfo || []
  return(<>
  <div className={cl.quickInfo}>
  {
    quickInfo.map((info, i)=>{
      const prompt = (info.name || "").toUpperCase()
      const value = (info.value || "").trim().toUpperCase()
      if(!value) {
        return null
      }
      return(    
        <div key={i} className={cl.info}>
          <div className={cl.prompt}>
          {prompt}
          </div>
          <div className={cl.value}>
          {value}
          </div>
        </div>
      )
    }

    )
  }


  </div>
  </>)
}