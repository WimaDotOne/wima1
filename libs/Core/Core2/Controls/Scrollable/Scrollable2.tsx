import { ReactNode, useEffect, useRef } from "react"
import { Scrollable } from "./Scrollable"
import cl from "./Scrollable2.module.scss"

interface IScrollable2Prop {
  topNode?: ReactNode
  children: ReactNode
  bottomNode?: ReactNode
}
export function Scrollable2({
  topNode, 
  children,
  bottomNode
}: IScrollable2Prop) {

  const topRef = useRef<HTMLDivElement>(null)
  const middleRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    if(!window) return
    const topDiv = topRef.current
    const middleDiv = middleRef.current
    const bottomDiv = bottomRef.current
    const wrapDiv = wrapRef.current
    
    if(!wrapDiv) return
    if(!middleDiv) return

    ResizeMiddle(topDiv, middleDiv, bottomDiv, wrapDiv)

  })

  return(<>
    <div className={cl.wrap} ref={wrapRef}>
      <div ref={topRef}>{topNode}</div>
      <div ref={middleRef}>
        <Scrollable>
        { children }
        </Scrollable>
      </div>
      <div ref={bottomRef}>{bottomNode}</div>
    </div>
  </>)
}

function ResizeMiddleObserve(
  topDiv: HTMLDivElement | null, 
  middleDiv: HTMLDivElement,
  bottomDiv: HTMLDivElement | null,
  wrapDiv: HTMLDivElement
) {

  
  const resizeObserver = new ResizeObserver(entries =>{
    ResizeMiddle(topDiv, middleDiv, bottomDiv, wrapDiv)
  })

  resizeObserver.observe(wrapDiv)
}

function ResizeMiddle(
  topDiv: HTMLDivElement | null, 
  middleDiv: HTMLDivElement,
  bottomDiv: HTMLDivElement | null,
  wrapDiv: HTMLDivElement
) {
  let topHeight = 0
  let bottomHeight = 0
  if(topDiv) {
    topHeight = topDiv.clientHeight
  }
  if(bottomDiv) {
    bottomHeight = bottomDiv.clientHeight
  }
  middleDiv.style.height 
    = (wrapDiv.clientHeight - topHeight - bottomHeight) + "px"
}