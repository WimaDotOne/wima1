import { ClassNames } from "../../../../../../../libs/Core/Core1/fCore1"
import { IMoment } from "../../../../Model/IMoment"
import cl from "./Moment.module.scss"

interface IMomentProp {
  moment: IMoment
}

export function Moment({
  moment
}: IMomentProp) {

  const narratives = moment.narratives || []
  const imageUrls = moment.imageUrls|| []
  const lines = moment.lines || []

  const imageCount = imageUrls.length

  let maxWidth = 340
  if(imageCount <= 1) {
    maxWidth = 360
  } else if(imageCount === 2) {
    maxWidth = 720
  } else {
    maxWidth = 1200
  }
  return(<>
    <div className={cl.momentSpace} style={{maxWidth: maxWidth+"px"}}>
    <div className={cl.moment}>
      <div className={cl.narratives}>
      {
        narratives.map((narrative, i)=>{
          const clOdd = i%2===1 ? cl.odd : ""
          return (
            <div key={i} className={ClassNames([cl.narrative, clOdd])}>
            { narrative }
            </div>
          )
        })
      }
      </div>

      <div className={cl.images}>
      {
        imageUrls.map((url, i)=>
          <div className={cl.imageSpace}>
            <div key={i} className={cl.image} style={{backgroundImage: `url(${url})`}}>
            </div>
          </div>
        )
      }
      </div>

      <div className={cl.lines}>
      {
        lines.map((line, i)=>{
          const clOdd = i%2===1 ? cl.odd : ""
          return (
            <div key={i} className={ClassNames([cl.line, clOdd])}>
            { line }
            </div>
          )
        })
      }
      </div>
    </div>
    </div>
  </>)
}