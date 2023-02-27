import { useEffect, useState } from "react"
import { ClassNames } from "../../../../../libs/Core/Core1/fCore1"
import cl from "./StickyNote.module.scss"

interface IStickyNoteProp {
  title: string
  text: string
}

export function StickyNote({
  title,
  text
}: IStickyNoteProp) {

  const [rotateNum, setRotateNum] = useState<number>(0)
  const [verticalNum, setVerticalNum] = useState<number>(0)
  const [colorNum, setColorNum] = useState<number>(0)


  useEffect(()=>{
    if(rotateNum>0) return
    const n1 = Math.floor(Math.random()*4) + 1
    const n2 = Math.floor(Math.random()*5) + 1
    const n3 = Math.floor(Math.random()*5) + 1
    setRotateNum(n1)
    setVerticalNum(n2)
    setColorNum(n3)
  })
  let clRotate = cl.neg6
  let clVertical = ""
  let clNoteColor = cl.yellow

  switch(rotateNum) {
    case 1: clRotate = cl.neg3; break
    case 2: clRotate = cl.pos3; break
    case 3: clRotate = cl.pos6; break
    default: clRotate = cl.neg6
  }
  switch(verticalNum) {
    case 1: clVertical = cl.up1; break
    case 2: clVertical = cl.up2; break
    case 3: clVertical = cl.up3; break
    case 4: clVertical = cl.up4; break
    default: clVertical = ""
  }
  switch(colorNum) {
    case 1: clNoteColor = cl.green; break
    case 2: clNoteColor = cl.blue; break
    case 3: clNoteColor = cl.pink; break;
    case 4: clNoteColor = cl.purple; break;
    default: clNoteColor = cl.yellow
  }


  return(<>
  <link href="https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap" rel="stylesheet" />

  <div className={cl.stickyNoteSpace}>
  <div className={ClassNames([cl.stickyNote, clRotate, clVertical, clNoteColor])}>
    <div className={cl.title}>{title}</div>
    <div className={cl.text}>{text}</div>
  </div>
  </div>
  </>)
}