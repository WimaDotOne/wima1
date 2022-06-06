import { ReactNode } from "react"
import { useAppleWindow } from "../../libs/Core/Core2/AppleWindow/fAppleWindow"
import { AppleWindowBottomBarDiv } from "../../libs/Core/Core2/fCore2"

interface IAppleWindowBottomBarProp {
  children: ReactNode
}
export function AppleWindowBottomBar({
  children
}: IAppleWindowBottomBarProp) {

  const win = useAppleWindow()

  return(<>
    <AppleWindowBottomBarDiv isLeftBarOpen={win?.isOpen || false}>
      {children}
    </AppleWindowBottomBarDiv>
  </>)
}