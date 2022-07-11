import { useEffect, useState } from "react"
import { BookConfig } from "../../../../../../../../bConfig"
import { Get2, Post2, useShield } from "../../../../../../../../libs/Core/Core1/fCore1"
import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv, TextEditor } from "../../../../../../../../libs/Core/Core2/fCore2"
import { FileNameBar } from "../../../../../../../../libs/Core/Core2/TextEditor/FileNameBar"
import { useWimaEnv } from "../../../../../../../Wima/fWima"
import { BookColor } from "../../../../../CSS/BookColor"
import { IProject } from "../../../../../Model/IProject"
import cl from "./ChapterEditor.module.scss"

interface IChapterEditorProp {
  project: IProject
  chapterId: string
  backToChaptersHome: ()=>void
}

export function ChapterEditor({
  project,
  chapterId,
  backToChaptersHome
}: IChapterEditorProp) {

  const [text, setText] = useState<string>("")
  const [chapterName, setChapterName] = useState<string>("")
  const [chapterNumber, setChapterNumber] = useState<string>("")
  const [hasChange, setHasChange] = useState<boolean>(false)
  const [wrapLine, setWrapLine] = useState<boolean>(false)
  const [loaded, setLoaded] = useState<boolean>(false)

  const wimaEnv = useWimaEnv()
  const shield = useShield()

  function closeFile() {
    backToChaptersHome()
  }

  async function saveFile() {
    await Post2(shield, "/book/SaveChapterText", {
      projectId: project.id,
      chapterId,
      text
    }, (res)=>{
      backToChaptersHome()
    })
  }

  async function LoadChapterText() {
    if(!project.id) return
    if(!chapterId) return
    if(loaded) return
    await Get2(shield, `/book/LoadChapterText?projectId=${project.id}&chapterId=${chapterId}`, (res)=>{
      setLoaded(true)
      setText(res.text)
      setChapterName(res.chapterName)
      setChapterNumber(res.chapterNumber)
    })
  }

  function toggleWrap() {
    setWrapLine(!wrapLine)
  }

  useEffect(()=>{
    LoadChapterText()
  })

  const textMaxLength = +(wimaEnv?.movicScriptFileMaxLength || BookConfig.textMaxPerChapter)

  return(<>
  <FileNameBar fileName={`§${chapterNumber}. ${chapterName} (${project.bookTitle})`} />
  <TextEditor text={text} setText={setText} styleHeight="calc(100vh - 76px)"
    setHasChange={setHasChange} autoFocus wrapLine={wrapLine}
    maxLength={textMaxLength}
  />
  <AppleWindowBottomBarFill />
  <AppleWindowPlainBottomBarDiv>
    <AppleIconButtons color={BookColor.themeGreen}
      icon1="x" onClick1={closeFile}
      icon2={wrapLine ? "lineunwrap": "linewrap"} onClick2={toggleWrap}
      icon5="floppydisk" onClick5={saveFile} disabled5={!hasChange}
    />
  </AppleWindowPlainBottomBarDiv>
  </>)
}