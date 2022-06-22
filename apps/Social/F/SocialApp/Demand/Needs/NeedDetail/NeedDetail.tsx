import { useState } from "react"
import { GENERAL_TEXTAREA_MAX } from "../../../../../../../bConfig"
import { TextArea1 } from "../../../../../../../libs/Core/Core1/Fields/TextArea/TextArea1"
import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv, Button1, Div, LimitWidth } from "../../../../../../../libs/Core/Core2/fCore2"
import { SectionLine } from "../../../../../../../libs/Pop/Pop1/ReadEdit/SectionLine"
import { TextareaCell } from "../../../../../../../libs/Pop/Pop1/ReadEdit/TextareaCell"
import { TextCell } from "../../../../../../../libs/Pop/Pop1/ReadEdit/TextCell"
import { AppleNewsHeader1 } from "../../../../../../../libs/Pop/Pop2/fPop2"
import { SocialColor } from "../../../../CSS/SocialColor"
import { ISocialNeed } from "../../../../Model/ISocialNeed"

interface INeedDetailProp {
  need?: ISocialNeed
  goHome: ()=>void
  goProfile: ()=>void
}

export function NeedDetail({
  need,
  goHome,
  goProfile
}: INeedDetailProp) {

  const [message, setMessage] = useState<string>("")

  async function reply() {
    
  }

  return(<>
  <LimitWidth maxWidth={800}>
    <Div height={10} />
    <AppleNewsHeader1 text1={need?.name || ""} h={3} />
    <Div height={10} />
    <TextCell prompt="Short Description" value={need?.shortDescription} />
    <Div height={2} />
    <TextCell prompt="Willing to Pay" value={need?.willPay ? "Yes": "N/A"} />
    <Div height={2} />
    <TextareaCell prompt="Description" value={need?.description} pre />
    <Div height={10} />
    <SectionLine />
    <Button1 text="View Profile" onClick={goProfile} color={SocialColor.themeBlue} />
    <Div height={20} />
  </LimitWidth>
  
  <AppleWindowBottomBarFill />
  <AppleWindowPlainBottomBarDiv>
    <AppleIconButtons color={SocialColor.themeBlue}
      icon1="chevron.left"
      onClick1={goHome}
    />
  </AppleWindowPlainBottomBarDiv>
  </>)
}