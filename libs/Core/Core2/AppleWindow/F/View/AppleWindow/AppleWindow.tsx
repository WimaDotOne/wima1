import { Dispatch, ReactNode, SetStateAction } from "react"
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

  return(<>
    <ViewDiv isLeftBarOpen={isLeftBarOpen}>
      {children}
    </ViewDiv>
    <LeftBarDiv open={isLeftBarOpen} brand={brand}>
      <Menu menu={menu} selectedItemId={viewId} onSelectItem={goToView}/>
    </LeftBarDiv>
    <Hamburger setOpen={setIsLeftBarOpen} />
  </>)
}