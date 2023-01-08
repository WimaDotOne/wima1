import cl from "./HeroHeader.module.scss"

interface IHearHeaderProp {
  bigWords: string
  smallWords?: string
}

export function HeroHeader({
  bigWords,
  smallWords
}: IHearHeaderProp) {
  return(<>
  <div className={cl.hero}>
    <div className={cl.heroInner}>
      <h1 className={cl.bigWords}>{bigWords}</h1>
      <p className={cl.smallWords}>{smallWords}</p>
    </div>
  </div>
  </>)
}