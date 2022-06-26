import { useState } from "react"
import { GENERAL_TEXTAREA_MAX } from "../../../../../../../bConfig"
import { Post2, TextDate1, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { TextArea1 } from "../../../../../../../libs/Core/Core1/Fields/TextArea/TextArea1"
import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv, Button1, Div, LimitWidth } from "../../../../../../../libs/Core/Core2/fCore2"
import { SvgIcon } from "../../../../../../../libs/Core/Core2/Svg/SvgIcon"
import { SectionLine } from "../../../../../../../libs/Pop/Pop1/ReadEdit/SectionLine"
import { TextareaCell } from "../../../../../../../libs/Pop/Pop1/ReadEdit/TextareaCell"
import { TextCell } from "../../../../../../../libs/Pop/Pop1/ReadEdit/TextCell"
import { AppleNewsHeader1 } from "../../../../../../../libs/Pop/Pop2/fPop2"
import { SocialColor } from "../../../../CSS/SocialColor"
import { ISocialService } from "../../../../Model/ISocialService"
import cl from "./ServiceDetail.module.scss"

interface IServiceDetailProp {
  service?: ISocialService
  goHome: ()=>void
  goProfile: ()=>void
}

export function ServiceDetail({
  service,
  goHome,
  goProfile
}: IServiceDetailProp) {

  const [message, setMessage] = useState<string>("")
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false)
  const shield = useShield()

  async function reply() {
    if(!service) return
    await Post2(shield, "/social/ReplyService", {
      message,
      serviceId: (service._id || "").toString()
    },(res)=>{
      setShowConfirmation(true)
    })
  }

  return(<>
  <LimitWidth maxWidth={800}>
    <Div height={10} />
    <AppleNewsHeader1 text1={service?.name || ""} h={3} />
    <TextCell prompt="Created at" value={TextDate1(service?.createdAt)} />
    <Div height={10} />
    <TextCell prompt="Short Description" value={service?.shortDescription} />
    <Div height={2} />
    <TextCell prompt="Price" value={service?.price} />
    <Div height={2} />
    <TextareaCell prompt="Description" value={service?.description} pre />
    <Div height={10} />
    <Button1 text="View Profile" onClick={goProfile} color={SocialColor.themeBlue} />
    <SectionLine />
    {
      showConfirmation ? 
      <>
      <div className={cl.confirmation}>
        <div className={cl.checkmarkDiv}>
          <SvgIcon name="checkmark.disk" width={100} color="#04AA6D" />
        </div>
        You and the other person will soon receive email notifications containing each other's email address. Continue to communicate with your partner using emails.
      </div>
      </>: 
      <>
        <Div height={20} />
        <div className={cl.introduction}>
          Introduce yourself when you reply to the post. After your reply, you and your partner will receive an email containing the other's email address. You can continue the communication through emails.
        </div>
        <Div height={20} />
        <TextArea1 prompt="Reply"
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