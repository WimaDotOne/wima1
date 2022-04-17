import { ReactNode, useEffect, useRef } from "react"
import { Scrollable } from "./Scrollable"
import cl from "./Scrollable2.module.scss"

interface IScrollable2Prop {
  topNode?: ReactNode
  children: ReactNode
  bottomNode?: ReactNode
}

// Parent of Scrollable2 needs to have a fixed height to work
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
    const topDiv = topRef.current
    const middleDiv = middleRef.current
    const bottomDiv = bottomRef.current
    const wrapDiv = wrapRef.current
    
    if(!wrapDiv || !topDiv || !middleDiv || !bottomDiv) return

    ResizeMiddle(topDiv, middleDiv, bottomDiv, wrapDiv)

    //ResizeMiddle might not get sizes right due to some unloaded element
    ResizeMiddleObserve(topDiv, middleDiv, bottomDiv, wrapDiv)
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
  topDiv: HTMLDivElement, 
  middleDiv: HTMLDivElement,
  bottomDiv: HTMLDivElement,
  wrapDiv: HTMLDivElement
) {
  const resizeObserver = new ResizeObserver(() =>{
    ResizeMiddle(topDiv, middleDiv, bottomDiv, wrapDiv)
  })

  resizeObserver.observe(wrapDiv)
}

function ResizeMiddle(
  topDiv: HTMLDivElement, 
  middleDiv: HTMLDivElement,
  bottomDiv: HTMLDivElement,
  wrapDiv: HTMLDivElement
) {
  middleDiv.style.height = (
    wrapDiv.clientHeight 
    - topDiv.clientHeight 
    - bottomDiv.clientHeight) + "px"
}