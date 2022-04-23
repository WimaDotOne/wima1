import { useState } from "react"
import { AppleWindowBottomBarFill, TextEditor } from "../../../../../../../../libs/Core/Core2/fCore2"
import { MovicWindowBottomBar } from "../../../../MovicWindow/MovicWindowBottomBar"
import cl from "./MovieScript.module.scss"

interface IMovieScriptProp {
}
export function MovieScript({
  
}: IMovieScriptProp) {

  const [script, setScript] = useState<string>("")
  return(<>
    <div className={cl.editorWrap}>
      <TextEditor text={script}/>
    </div>
    <AppleWindowBottomBarFill />
    <MovicWindowBottomBar>

    </MovicWindowBottomBar>
  </>)
}