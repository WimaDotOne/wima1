import cl from "./TextListCell.module.scss"

interface ITextListCellProp {
  prompt?: string
  value?: string
}

export function TextListCell({
  prompt,
  value
}: ITextListCellProp) {

  const lines = (value || "").split("\n")

  return(<>
  <div className={cl.textListCell}>
    <div className={cl.prompt}>{prompt}</div>
    <div className={cl.value}>
    {
      lines.map((line, i)=> {
        if(!line || !line.trim()) return null

        const lineBegin = line.substring(0, 10)
        return(
        <div key={i+lineBegin} className={cl.line}>
          <div className={cl.dot}>&bull;</div>
          <div className={cl.text}>
            {line}  
          </div>
        </div>
        )
      }

      )
    }
    </div>
  </div>
  </>)
}