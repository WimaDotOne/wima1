import { useEffect, useState } from "react"
import { GENERAL_INPUT_MAX, GENERAL_TEXTAREA_MAX } from "../../../../../../../../bConfig"
import { Post2, TextField1, useShield } from "../../../../../../../../libs/Core/Core1/fCore1"
import { CheckField1 } from "../../../../../../../../libs/Core/Core1/Fields/CheckField/CheckField1"
import { TextArea1 } from "../../../../../../../../libs/Core/Core1/Fields/TextArea/TextArea1"
import { Button1, Div } from "../../../../../../../../libs/Core/Core2/fCore2"
import { PopUp } from "../../../../../../../../libs/Pop/Pop1/PopUp/PopUp"
import { AppleNewsHeader1 } from "../../../../../../../../libs/Pop/Pop2/fPop2"
import { SocialColor } from "../../../../../CSS/SocialColor"
import { ISocialNeed } from "../../../../../Model/ISocialNeed"

interface IEditNeedPopUpProp {
  need0: ISocialNeed
  show: boolean
  setShow: (show: boolean)=>void
  refresh: ()=>void
}

export function EditNeedPopUp({
  need0,
  show, setShow,
  refresh
}: IEditNeedPopUpProp) {

  const [name, setName] = useState<string>("")
  const [shortDescription, setShortDescription] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [willPay, setWillPay] = useState<boolean>(false)

  const shield = useShield()

  useEffect(()=>{
    setName(need0.name)
    setShortDescription(need0.shortDescription || "")
    setDescription(need0.description || "")
    setWillPay(!!need0.willPay)
  }, [need0])

  async function onSave() {
    await Post2(shield, "/social/SaveNeed", {
      needId: need0._id,
      name,
      shortDescription,
      willPay,
      description
    },(res)=>{
      setShow(false)
      refresh()
    })
  }

  async function deleteNeed() {
    if(!confirm(`Delete ${name}?`)) return
    if(!need0 || !need0._id) return
    await Post2(shield, "/social/DeleteNeed",{
      needId: need0._id
    }, (res)=>{
      setShow(false)
      refresh()
    })
  }

  return(<>
    <PopUp show={show} setShow={setShow}
      onSave={onSave}
      color={SocialColor.themeBlue}
    >
      <AppleNewsHeader1 text1="Use Help" h={3} />
      <Div height={10} />
      <div style={{maxWidth: "300px"}}>
      <TextField1 prompt="Name"
        value={name} 
        onChange={(value)=>{setName(value)}} 
        maxLength={50}
      />
      </div>
      <Div height={10} />
      <TextField1 prompt="Short Description"
        value={shortDescription} 
        onChange={(value)=>{setShortDescription(value)}} 
        maxLength={GENERAL_INPUT_MAX}
      />
      <Div height={10} />
      <CheckField1 prompt="I'm willing to pay for the help"
        checked={!!willPay}
        onChange={(checked)=>{setWillPay(checked)}}
      />
      <Div height={10} />
      <TextArea1 prompt="Description"
        rows={5}
        value={description}
        onChange={(value)=>{setDescription(value)}} 
        maxLength={GENERAL_TEXTAREA_MAX}
      />
      <Div height={10} />

      <Button1 text="Delete" color={SocialColor.$errorRed}
        onClick={deleteNeed} />
    </PopUp>
  </>)
}