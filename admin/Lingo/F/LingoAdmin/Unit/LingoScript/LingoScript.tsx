import { useEffect, useState } from "react"
import { LingoAdminConfig } from "../../../../../../bConfig"
import { Get2, Post2, useShield } from "../../../../../../libs/Core/Core1/fCore1"
import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv, TextEditor } from "../../../../../../libs/Core/Core2/fCore2"
import { FileNameBar } from "../../../../../../libs/Core/Core2/TextEditor/FileNameBar"
import { LanguageEnumText } from "../../../../Enum/LanguageEnum"
import { LingoAdminColor } from "../../../CSS/LingoAdminColor"
import { IUnit } from "../../../Model/IUnit"


interface ILingoScriptProp {
  unit: IUnit
  backToUnitHome: ()=>void
}
export function LingoScript({
  unit,
  backToUnitHome
}: ILingoScriptProp) {

  const [script, setScript] = useState<string>("")
  const [hasChange, setHasChange] = useState<boolean>(false)
  const [wrapLine, setWrapLine] = useState<boolean>(false)
  const [loaded, setLoaded] = useState<boolean>(false)

  const shield = useShield()

  function closeFile() {
    backToUnitHome()
  }
  async function saveFile() {
    await Post2(shield, "/lingoAdmin/SaveLingoScript", {
      unitId: unit._id,
      script
    }, (res)=>{
      backToUnitHome()
    })
  }

  async function LoadFile() {
    if(!unit._id) return
    if(loaded) return
    await Get2(shield, `/lingoAdmin/LoadLingoScript?unitId=${unit._id}`, (res)=>{
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

  const scriptMaxLength = LingoAdminConfig.scritptFileMaxLength
  
  return(<>
    <FileNameBar fileName={LanguageEnumText(unit.language)+" "+ unit.name} />
    <TextEditor text={script} setText={setScript} styleHeight="calc(100vh - 76px)"
      setHasChange={setHasChange} autoFocus wrapLine={wrapLine}
      maxLength={scriptMaxLength}
    />
    <AppleWindowBottomBarFill />
    <AppleWindowPlainBottomBarDiv>
      <AppleIconButtons color={LingoAdminColor.themeBlue}
        icon1="x" onClick1={closeFile}
        icon2={wrapLine ? "lineunwrap": "linewrap"} onClick2={toggleWrap}
        icon5="floppydisk" onClick5={saveFile} disabled5={!hasChange}
      />
    </AppleWindowPlainBottomBarDiv>
  </>)
}