import { useEffect, useState } from "react"
import { GENERAL_INPUT_MAX } from "../../../../../../../../bConfig"
import { ErrorLine, Get2, NumberField1, Post2, TextField1, useShield } from "../../../../../../../../libs/Core/Core1/fCore1"
import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv, Button1, Div } from "../../../../../../../../libs/Core/Core2/fCore2"
import { HeadLine } from "../../../../../../../../libs/Pop/Pop3/fPop3"
import { BookColor } from "../../../../../CSS/BookColor"
import { IProject } from "../../../../../Model/IProject"
import cl from "./ChapterSettings.module.scss"

interface IChapterSettingsProp {
  project: IProject
  reloadChapters: ()=>void
  chapterId: string
  backToChaptersHome: ()=>void
}

export function ChapterSettings({
  project,
  chapterId,
  reloadChapters,
  backToChaptersHome
}: IChapterSettingsProp) {

  const [chapterName, setChapterName] = useState<string>("")
  const [chapterNumber, setChapterNumber] = useState<string>("")
  const [chapterNameError, setChapterNameError] = useState<string>("")
  const [chapterNumberError, setChapterNumberError] = useState<string>("")
  const [loaded, setLoaded] = useState<boolean>(false)
  const shield = useShield()

  async function loadChapterSettings() {
    if(loaded) return
    if(!chapterId) return
    await Get2(shield, `/book/LoadChapterSettings?chapterId=${chapterId}`,
      (res)=>{
        setLoaded(true)
        setChapterName(res.chapterName)
        setChapterNumber(res.chapterNumber+"")
      }
    )
  }

  async function saveChapterSettings() {
    let hasError = false
    if(!chapterName || !(chapterName.trim())) {
      hasError = true
      setChapterNameError("Field is required")
    }
    if(!chapterNumber || !(chapterNumber.trim())) {
      hasError = true
      setChapterNumberError("Field is required")
    }
    if(hasError) return
    if(!chapterId) return

    await Post2(shield, "/book/SaveChapterSettings", {
      projectId: project.id,
      chapterId,
      chapterName,
      chapterNumber
    },(res)=>{
      reloadChapters()
      backToChaptersHome()
    })
  }
  function doNothing() {}

  async function deleteChapter() {
    if(!chapterId) return

    if(!confirm(`Delete chapter ${chapterName}?`)) return
    await Post2(shield, "/book/DeleteChapter", {
      projectId: project.id,
      chapterId
    },(res)=>{
      reloadChapters()
      backToChaptersHome()
    })
  }

  useEffect(()=>{
    loadChapterSettings()
  })

  return(<>
  <div className={cl.chapterSettings}>
  <HeadLine text="Chapter" h={3} />
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
  </div>
  <AppleWindowBottomBarFill />
  
  <AppleWindowPlainBottomBarDiv>
    <AppleIconButtons color={BookColor.themeGreen} strokeWidth={20}
      icon1="chevron.left" onClick1={backToChaptersHome} text1=""
      icon2="empty" onClick2={doNothing}
      icon3="trashbin" onClick3={deleteChapter}
      icon5="floppydisk" onClick5={saveChapterSettings} text2=""
    /> 
  </AppleWindowPlainBottomBarDiv>
  </>)
}