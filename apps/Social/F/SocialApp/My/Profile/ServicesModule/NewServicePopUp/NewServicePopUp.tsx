import { useState } from "react"
import { GENERAL_INPUT_MAX, GENERAL_TEXTAREA_MAX } from "../../../../../../../../bConfig"
import { Post2, TextField1, useShield } from "../../../../../../../../libs/Core/Core1/fCore1"
import { TextArea1 } from "../../../../../../../../libs/Core/Core1/Fields/TextArea/TextArea1"
import { Div } from "../../../../../../../../libs/Core/Core2/fCore2"
import { PopUp } from "../../../../../../../../libs/Pop/Pop1/PopUp/PopUp"
import { AppleNewsHeader1 } from "../../../../../../../../libs/Pop/Pop2/fPop2"
import { HeadLine } from "../../../../../../../../libs/Pop/Pop3/fPop3"
import { SocialColor } from "../../../../../CSS/SocialColor"
import cl from "./NewServicePopUp.module.scss"

interface INewServicePopUpProp {
  show: boolean
  setShow: (show: boolean)=>void
  isGoods: boolean
  refresh?: ()=>void
}

export function NewServicePopUp({
  show, setShow,
  isGoods,
  refresh
}: INewServicePopUpProp) {

  const [name, setName] = useState<string>("")
  const [shortDescription, setShortDescription] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [price, setPrice] = useState<string>("")

  const shield = useShield()

  function cleanFields() {
    setName("")
    setShortDescription("")
    setDescription("")
    setPrice("")
  }

  async function onSave() {
    await Post2(shield, "/social/CreateService", {
      name,
      shortDescription,
      price,
      description,
      isGoods
    },(res)=>{
      cleanFields()
      setShow(false)
      if(refresh) {
        refresh()
      }
    })
  }

  const header = isGoods? "New Item" :  "New Serice"
  return(<>
    <PopUp show={show} setShow={setShow}
      onClose={cleanFields}
      onSave={onSave}
      color={SocialColor.themeBlue}
    >
      <AppleNewsHeader1 text1={header} h={3} />
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
      <TextField1 prompt="Price"
        value={price} 
        onChange={(value)=>{setPrice(value)}} 
        maxLength={GENERAL_INPUT_MAX}
      />
      <Div height={10} />
      <TextArea1 prompt="Description"
        rows={5}
        value={description}
        onChange={(value)=>{setDescription(value)}} 
        maxLength={GENERAL_TEXTAREA_MAX}
      />
      <Div height={10} />
    </PopUp>
  </>)
}