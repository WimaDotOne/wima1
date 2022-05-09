import { useEffect, useState } from "react"
import { MovicConfig } from "../../../../../../../bConfig"
import { Get2, Post2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv, TextEditor } from "../../../../../../../libs/Core/Core2/fCore2"
import { FileNameBar } from "../../../../../../../libs/Core/Core2/TextEditor/FileNameBar"
import { useWimaEnv } from "../../../../../../Wima/fWima"
import { MovicColor } from "../../../../CSS/MovicColor"
import { IProject } from "../../../../Model/IProject"


interface IMovicScriptProp {
  project: IProject
  backToProjectHome: ()=>void
}
export function MovicScript({
  project,
  backToProjectHome
}: IMovicScriptProp) {

  const [script, setScript] = useState<string>("")
  const [hasChange, setHasChange] = useState<boolean>(false)
  const [wrapLine, setWrapLine] = useState<boolean>(false)
  const [loaded, setLoaded] = useState<boolean>(false)

  const wimaEnv = useWimaEnv()
  const shield = useShield()

  function closeFile() {
    backToProjectHome()
  }
  async function saveFile() {
    await Post2(shield, "/movic/SaveMovicScript", {
      projectId: project.id,
      script
    }, (res)=>{
      backToProjectHome()
    })
  }

  async function LoadFile() {
    if(!project.id) return
    if(loaded) return
    await Get2(shield, `/movic/LoadMovicScript?projectId=${project.id}`, (res)=>{
      setLoaded(true)
      setScript(res.script)
    })
  }

  function toggleWrap() {
    setWrapLine(!wrapLine)
  }

  useEffect(()=>{
    LoadFile()
  })

  const scriptMaxLength = +(wimaEnv?.movicEnv?.scriptFileMaxLength || MovicConfig.scritptFileMaxLength)
  
  return(<>
    <FileNameBar fileName={project.movicTitle} />
    <TextEditor text={script} setText={setScript} styleHeight="calc(100vh - 76px)"
      setHasChange={setHasChange} autoFocus wrapLine={wrapLine}
      maxLength={scriptMaxLength}
    />
    <AppleWindowBottomBarFill />
    <AppleWindowPlainBottomBarDiv>
      <AppleIconButtons color={MovicColor.themeRed}
        icon1="x" onClick1={closeFile}
        icon2={wrapLine ? "lineunwrap": "linewrap"} onClick2={toggleWrap}
        icon5="floppydisk" onClick5={saveFile} disabled5={!hasChange}
      />
    </AppleWindowPlainBottomBarDiv>
  </>)
}