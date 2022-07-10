import { useState } from "react"
import { GENERAL_INPUT_MAX } from "../../../../../../../../bConfig"
import { NumberField1, TextField1 } from "../../../../../../../../libs/Core/Core1/fCore1"
import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv, Div } from "../../../../../../../../libs/Core/Core2/fCore2"
import { HeadLine } from "../../../../../../../../libs/Pop/Pop3/fPop3"
import { BookColor } from "../../../../../CSS/BookColor"
import cl from "./NewChapter.module.scss"

interface INewChapterProp {
  backToChaptersHome: ()=>void
}
export function NewChapter({
  backToChaptersHome
}: INewChapterProp) {

  const [bookTitle, setBookTitle] = useState<string>("")
  const [chapterNumber, setChapterNumber] = useState<string>("")
  function save() {

  }
  return(<>
  <div className={cl.new}>
    <HeadLine text="New Chapter" h={3} />
    <Div height={10} />
    <div className={cl.field}>
      <TextField1 prompt="Chapter name" 
        value={bookTitle} onChange={(value)=>{
          setBookTitle(value)
        }}
        maxLength = { GENERAL_INPUT_MAX }
      />
    </div>
    <Div height={15} />
    <div className={cl.numField}>
      <NumberField1 prompt="Chapter number"
        value={chapterNumber} onChange={(value)=>{
          setChapterNumber(value)
        }}
        maxLength = { 2 }
      />
    </div>

  </div>
  <AppleWindowBottomBarFill />
  
  <AppleWindowPlainBottomBarDiv>
    <AppleIconButtons color={BookColor.themeGreen} strokeWidth={20}
      icon1="chevron.left" onClick1={backToChaptersHome} text1=""
      icon5="floppydisk" onClick5={save} text2=""
    /> 
  </AppleWindowPlainBottomBarDiv>
  </>)
}