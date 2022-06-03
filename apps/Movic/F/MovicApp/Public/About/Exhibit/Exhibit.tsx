import { useState } from "react"
import { IScene } from "../../../../Model/IMoment"
import { IMovic } from "../../../../Model/IMovic"
import { DvdList } from "../../../H/DvdList/DvdList"
import { MovicPlayer } from "../../../MovicPlayer/MovicPlayer"
import cl from "./Exhibit.module.scss"

export function Exhibit() {

  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [scenes, setScenes] = useState<Array<IScene>>([])

  const movics = GetMovics()

  function onClickDvd(movicId: string) {
    setIsPlaying(true)
  }
  return(<>
  {
    isPlaying ?
    <MovicPlayer movicTitle="" scenes={scenes} 
      onStop={()=>{setIsPlaying(false)}} />:
    <DvdList movics={movics} onClick={onClickDvd}/>
  }
    
  </>)
}

function GetMovics() {

  return([
    {
      id: "1",
      title: "",
      imageUrl: ""
    },
    {
      id: "2",
      title: "",
      imageUrl: ""
    },
    {
      id: "3",
      title: "",
      imageUrl: ""
    },
    {
      id: "4",
      title: "",
      imageUrl: ""
    }
  ])
}