import { Dispatch, ReactNode, SetStateAction } from "react"
import { Dimension } from "../../CSS/Dimension"
import { Hamburger } from "../../H/Hamburger/Hamburger"
import { LeftBarDiv } from "../../H/LeftBarDiv/LeftBarDiv"
import { Menu } from "../../H/Menu/Menu"
import { ViewDiv } from "../../H/ViewDiv/ViewDiv"
import { MenuModel } from "../../Model/Menu"

interface IAppleWindowProp {
  isLeftBarOpen?: boolean
  setIsLeftBarOpen?: Dispatch<SetStateAction<boolean>>
  viewId?: string
  goToView: (viewId: string)=>void
  menu?: MenuModel
  children: ReactNode
  brand?: string
}
export function AppleWindow({
  isLeftBarOpen, setIsLeftBarOpen,
  viewId, goToView,
  menu,
  children,
  brand
}:IAppleWindowProp) {

  function goToViewAndCloseLeftBar(viewId: string) {
    if(window) {
      //use min-width because css use min-width. max-width will cause inconsistency in boundry case
      if(!window.matchMedia(`(min-width: ${Dimension.maxPhoneHeight})`).matches) {
        if(setIsLeftBarOpen) {
          setIsLeftBarOpen(false)
        }
      }
    }
    if(goToView) {
      goToView(viewId)
    }
  }

  return(<>
    <ViewDiv isLeftBarOpen={isLeftBarOpen}>
      {children}
    </ViewDiv>
    <LeftBarDiv open={isLeftBarOpen} brand={brand} brandColor={menu?.themeColor}>
      <Menu menu={menu} selectedItemId={viewId} onSelectItem={goToViewAndCloseLeftBar}/>
    </LeftBarDiv>
    <Hamburger setOpen={setIsLeftBarOpen} />
  </>)
}