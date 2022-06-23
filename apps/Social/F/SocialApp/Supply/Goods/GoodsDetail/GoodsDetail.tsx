import { useState } from "react"
import { GENERAL_TEXTAREA_MAX } from "../../../../../../../bConfig"
import { Post2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { TextArea1 } from "../../../../../../../libs/Core/Core1/Fields/TextArea/TextArea1"
import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv, Button1, Div, LimitWidth } from "../../../../../../../libs/Core/Core2/fCore2"
import { SectionLine } from "../../../../../../../libs/Pop/Pop1/ReadEdit/SectionLine"
import { TextareaCell } from "../../../../../../../libs/Pop/Pop1/ReadEdit/TextareaCell"
import { TextCell } from "../../../../../../../libs/Pop/Pop1/ReadEdit/TextCell"
import { AppleNewsHeader1 } from "../../../../../../../libs/Pop/Pop2/fPop2"
import { SocialColor } from "../../../../CSS/SocialColor"
import { ISocialService } from "../../../../Model/ISocialService"
import cl from "./GoodsDetail.module.scss"

interface IGoodsDetailProp {
  good?: ISocialService
  goHome: ()=>void
  goProfile: ()=>void
}

export function GoodsDetail({
  good,
  goHome,
  goProfile
}: IGoodsDetailProp) {

  const [message, setMessage] = useState<string>("")
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false)
  const shield = useShield()

  async function reply() {
    if(!good) return
    await Post2(shield, "/social/ReplyService", {
      message,
      serviceId: (good._id || "").toString()
    },(res)=>{
      setShowConfirmation(true)
    })
  }

  return(<>
  <LimitWidth maxWidth={800}>
    <Div height={10} />
    <AppleNewsHeader1 text1={good?.name || ""} h={3} />
    <Div height={10} />
    <TextCell prompt="Short Description" value={good?.shortDescription} />
    <Div height={2} />
    <TextCell prompt="Price" value={good?.price} />
    <Div height={2} />
    <TextareaCell prompt="Description" value={good?.description} pre />
    <Div height={10} />
    <Button1 text="View Profile" onClick={goProfile} color={SocialColor.themeBlue} />
    <SectionLine />
    {
      showConfirmation ? 
      <>
      <div className={cl.confirmation}>
        You replied to the post. You and the other person should soon receive email notifications containing the other's email address. Continue to communicate using emails.
      </div>
      </>: 
      <>
        <Div height={20} />
        <TextArea1 prompt="Reply (an email will be sent to you and the other person with contact information)"
          value={message} onChange={(value)=>{setMessage(value)}} 
          maxLength={GENERAL_TEXTAREA_MAX} rows={4}
        />
        <Div height={5} />
        <Button1 text="Reply" onClick={reply} color={SocialColor.themeBlue} />
      </>
    }
   
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