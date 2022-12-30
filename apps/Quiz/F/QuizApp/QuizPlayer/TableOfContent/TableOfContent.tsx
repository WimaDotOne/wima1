import { ISection } from "../../../Model/ISection"
import cl from "./TableOfContent.module.scss"

interface ITableOfContentProp {
  chapterName: string
  sections: Array<ISection>
  onClickSection: (id: string)=>void
}

export function TableOfContent({
  chapterName,
  sections,
  onClickSection
}: ITableOfContentProp) {

  sections = sections || []
  return(<>
  <div className={cl.tableOfContent}>
    <div className={cl.chapterName}>
      {chapterName}
    </div>
    {
      sections.map((section, i)=>
      <div>
        <div>{PadZero(i+1)}</div>
        <div onClick={()=>{
          onClickSection(section.id)
        }}>
          {section.title}
        </div>
      </div>
      )
    }
  </div>
  </>)
}

function PadZero(num: number) {
  if(num < 10) {
    return "0"+num
  }
  return ""+num
}