import { useState } from "react"
import { MovicConfig } from "../../../../../../../bConfig"
import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv, TextEditor } from "../../../../../../../libs/Core/Core2/fCore2"
import { useWimaEnv } from "../../../../../../Wima/fWima"
import { MovicColor } from "../../../../CSS/MovicColor"


interface IMovieScriptProp {
  backToProjectHome: ()=>void

}
export function MovieScript({
  backToProjectHome
}: IMovieScriptProp) {

  const [script, setScript] = useState<string>("")
  const [hasChange, setHasChange] = useState<boolean>(false)
  const wimaEnv = useWimaEnv()

  function closeFile() {
    backToProjectHome()
  }
  function saveFile() {
    backToProjectHome()
  }
  const scriptMaxLength = +(wimaEnv?.movicEnv?.scriptFileMaxLength || MovicConfig.scritptFileMaxLength)
  
  return(<>
    <TextEditor text={script} setText={setScript} styleHeight="calc(100vh - 40px)"
      setHasChange={setHasChange} autoFocus
      maxLength={scriptMaxLength}
    />
    <AppleWindowBottomBarFill />
    <AppleWindowPlainBottomBarDiv>
      <AppleIconButtons color={MovicColor.themeRed}
        icon1="x" onClick1={closeFile}
        icon5="floppydisk" onClick5={saveFile} disabled5={!hasChange}
      />
    </AppleWindowPlainBottomBarDiv>
  </>)
}