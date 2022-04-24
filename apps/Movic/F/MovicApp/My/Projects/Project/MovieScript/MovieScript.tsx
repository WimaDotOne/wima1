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
    <TextEditor text={script} setText={setScript} styleHeight="calc(100vh - 40px)"/>
    <AppleWindowBottomBarFill />
    <MovicWindowBottomBar>

    </MovicWindowBottomBar>
  </>)
}