import { SvgIcon } from "../../../../../Svg/SvgIcon"
import cl from "./Title.module.scss"

interface ITitleProp {
  text: string
  collapsible?: boolean
  collapsed?: boolean
  setCollapsed?: (collapsed: boolean) => void
}

export function Title({
  text,
  collapsible,
  collapsed, setCollapsed
}: ITitleProp) {

  function toggleCollapsed() {
    if(!setCollapsed) return
    setCollapsed(!collapsed)
  }

  return(<>
    <div className={cl.row}>
      <div className={cl.text}>{text}</div>
      {
        collapsible && collapsed !== undefined && setCollapsed ?
        <div className={cl.chevron} onClick={toggleCollapsed}>
          {
            collapsed ?
            <SvgIcon name="chevron.right" width={11} color="#aaa"/>:
            <SvgIcon name="chevron.down" width={11} color="#aaa"/>
          }
        </div>:null
      }
    </div>
  </>)
}