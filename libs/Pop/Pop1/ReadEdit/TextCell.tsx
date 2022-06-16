import cl from "./TextCell.module.scss"

interface ITextCellProp {
  prompt: string
  value?: string
}

export function TextCell({
  prompt,
  value
}: ITextCellProp) {
  return(<>
  <div className={cl.textCell}>
    <div className={cl.prompt}>{prompt}</div>
    <div className={cl.value}>{value}</div>
  </div>
  </>)
}