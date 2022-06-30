import { useState } from "react"
import { Tooltip } from "../../../../../../libs/Pop/Pop1/Tooltip/Tooltip"
import { Lang } from "../../../Model/Lang"
import cl from "./Keyboard.module.scss"

interface IKeyboardProp {
  lang: string
}

export function Keyboard({
  lang
}: IKeyboardProp) {

  let keys:Array<string> = []
  const [tipText, setTipText] = useState<string>("Copy")

  switch(lang) {
    case Lang.German:
      keys = ["ö","ä","ü","ß","Ö","Ä","Ü"]
      break
    case Lang.French:
      keys = ["é","ç","è","à","ù"]
      break
    default:
  }

  if(keys.length === 0) return null

  function copy(character:string) {
    setTipText(character)
    window.navigator.clipboard.writeText(character)
  }
  
  return(<>
    <div className={cl.keyboard}>
    {
      keys.map((character, i)=>
        <div key={i}>
          <Tooltip text={tipText}>
            <div className={cl.key}
              onMouseOut={()=>{setTipText("Copy")}}
              onClick={()=>{copy(character)}}>
              {character}
            </div>
          </Tooltip>
        </div>
      )
    }
    </div>
  </>)
}