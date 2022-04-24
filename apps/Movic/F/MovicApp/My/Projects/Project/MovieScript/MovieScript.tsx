import { useState } from "react"
import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv, TextEditor } from "../../../../../../../../libs/Core/Core2/fCore2"
import { MovicColor } from "../../../../../CSS/MovicColor"
import cl from "./MovieScript.module.scss"

interface IMovieScriptProp {
  backToProjectHome: ()=>void

}
export function MovieScript({
  backToProjectHome
}: IMovieScriptProp) {

  const [script, setScript] = useState<string>("")
  const [hasChange, setHasChange] = useState<boolean>(false)

  function closeFile() {
    backToProjectHome()
  }
  function saveFile() {
    backToProjectHome()
  }
  return(<>
    <TextEditor text={script} setText={setScript} styleHeight="calc(100vh - 40px)"
      setHasChange={setHasChange} autoFocus/>
    <AppleWindowBottomBarFill />
    <AppleWindowPlainBottomBarDiv>
      <AppleIconButtons color={MovicColor.themeRed}
        icon1="x" onClick1={closeFile}
        icon5="floppydisk" onClick5={saveFile} disabled5={!hasChange}
      />
    </AppleWindowPlainBottomBarDiv>
  </>)
}