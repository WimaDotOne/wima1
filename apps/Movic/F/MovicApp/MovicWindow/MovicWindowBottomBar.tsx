import { ReactNode } from "react"
import { useAppleWindow } from "../../../../../libs/Core/Core2/AppleWindow/fAppleWindow"
import { AppleWindowBottomBarDiv } from "../../../../../libs/Core/Core2/fCore2"

interface IMovicWindowBottomBarProp {
  children: ReactNode
}
export function MovicWindowBottomBar({
  children
}: IMovicWindowBottomBarProp) {

  const win = useAppleWindow()

  return(<>
    <AppleWindowBottomBarDiv isLeftBarOpen={win?.isOpen || false}>
      {children}
    </AppleWindowBottomBarDiv>
  </>)
}