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

  let clImageCount = ""
  if(imageCount < 2) {
    clImageCount = cl.image1
  } else if(imageCount === 2) {
    clImageCount = cl.image2
  } else {
    clImageCount = cl.image3
  }
  return(<>
    <div className={cl.momentSpace}>
    <div className={ClassNames([cl.moment, clImageCount])}>
      <div className={cl.narratives}>
      {
        narratives.map((narrative, i)=>{
          const clOdd = i%2===1 ? cl.odd : ""
          return (
            <div key={"narrative"+i} className={ClassNames([cl.narrative, clOdd])}>
            { narrative }
            </div>
          )
        })
      }
      </div>

      <div className={cl.images}>
      {
        imageUrls.map((url, i)=>
          <div className={cl.imageSpace} key={"image"+ i}>
            <div className={cl.image} style={{backgroundImage: `url(${url})`}}>
            </div>
          </div>
        )
      }
      </div>

      <div className={cl.linesSpace}>
        <div className={cl.lines}>
        {
          lines.map((line, i)=>{
            const clOdd = i%2===1 ? cl.odd : ""
            return (
              <div key={"line"+i} className={ClassNames([cl.line, clOdd])}>
              { line }
              </div>
            )
          })
        }
        </div>
      </div>
    </div>
    </div>
  </>)
}