import cl from "./TermHeader.module.scss"

interface ITermHeaderProp {
  header: string,
  lastUpdate: string
}
export function TermHeader({
  header, lastUpdate
}: ITermHeaderProp) {
  return(<>
    <div className={cl.termHeader}>
      <div className={cl.header}>{header}</div>
      <div className={cl.lastUpdate}>Last updated: {lastUpdate}</div>
    </div>
  </>)
}