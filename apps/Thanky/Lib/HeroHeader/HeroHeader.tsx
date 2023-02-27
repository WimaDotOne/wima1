import cl from "./HeroHeader.module.scss"

interface IHearHeaderProp {
  bigWords: string
  smallWords?: string
  h2?: boolean
  textColor?: string
  handWrite?: boolean
}

export function HeroHeader({
  bigWords,
  smallWords,
  h2
}: IHearHeaderProp) {

  return(<>
  <div className={cl.hero}>
    <div className={cl.heroInner}>
    {
      h2 ? 
      <h2 className={cl.bigWords}>{bigWords}</h2>:
      <h1 className={cl.bigWords}>{bigWords}</h1>
    }
      <p className={cl.smallWords}>{smallWords}</p>
    </div>
  </div>
  </>)
}