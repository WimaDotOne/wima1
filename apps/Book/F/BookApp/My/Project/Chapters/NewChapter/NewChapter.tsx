import { useState } from "react"
import { GENERAL_INPUT_MAX } from "../../../../../../../../bConfig"
import { ErrorLine, NumberField1, Post2, TextField1, useShield } from "../../../../../../../../libs/Core/Core1/fCore1"
import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv, Div } from "../../../../../../../../libs/Core/Core2/fCore2"
import { HeadLine } from "../../../../../../../../libs/Pop/Pop3/fPop3"
import { BookColor } from "../../../../../CSS/BookColor"
import { IProject } from "../../../../../Model/IProject"
import cl from "./NewChapter.module.scss"

interface INewChapterProp {
  reloadChapters: ()=>void
  project: IProject
  backToChaptersHome: ()=>void
}
export function NewChapter({
  reloadChapters,
  project,
  backToChaptersHome
}: INewChapterProp) {

  const [chapterName, setChapterName] = useState<string>("")
  const [chapterNumber, setChapterNumber] = useState<string>("")
  const [chapterNameError, setChapterNameError] = useState<string>("")
  const [chapterNumberError, setChapterNumberError] = useState<string>("")
  const shield = useShield()

  async function save() {
    let hasError = false
    if(!chapterName || !chapterName.trim()) {
      hasError = true
      setChapterNameError("Field is required")
    }
    if(!chapterNumber || !chapterNumber.trim()) {
      hasError = true
      setChapterNumberError("Field is required")
    }
    if(hasError) return

    await Post2(shield, "/book/CreateChapter", {
      projectId: project.id,
      chapterName,
      chapterNumber
    },(res)=>{
      reloadChapters()
      backToChaptersHome()
    })
  }
  return(<>
  <div className={cl.new}>
    <HeadLine text="New Chapter" h={3} />
    <Div height={10} />
    <div className={cl.field}>
      <TextField1 prompt="Chapter name" 
        value={chapterName} onChange={(value)=>{
          if(chapterNameError) { setChapterNameError("") }
          setChapterName(value)
        }}
        maxLength = { GENERAL_INPUT_MAX }
      />
    </div>
    <ErrorLine text={chapterNameError}/>
    <Div height={15} />
    <div className={cl.numField}>
      <NumberField1 prompt="Chapter number"
        value={chapterNumber} onChange={(value)=>{
          if(chapterNumberError) { setChapterNumberError("") }
          setChapterNumber(value)
        }}
        maxLength = { 2 }
      />
    </div>
    <ErrorLine text={chapterNumberError} />

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