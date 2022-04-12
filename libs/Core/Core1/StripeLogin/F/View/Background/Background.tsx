
import cl from "./Background.module.scss"

export function Background() {
  return(<>
    <div className={cl.div0}>
      <div className={cl.skewDiv}>
        <div className={cl.grayDiv}></div>
        <div className={cl.stripeLeft1}></div>
        <div className={cl.stripeRight2}></div>
        <div className={cl.stripeRight1}></div>
        <div className={cl.stripeRight1OverLap}></div>
      </div>
    </div>
  </>)
}