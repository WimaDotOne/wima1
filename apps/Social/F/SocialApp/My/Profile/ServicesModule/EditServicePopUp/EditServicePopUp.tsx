import { useEffect, useState } from "react"
import { GENERAL_INPUT_MAX, GENERAL_TEXTAREA_MAX } from "../../../../../../../../bConfig"
import { Post2, TextField1, useShield } from "../../../../../../../../libs/Core/Core1/fCore1"
import { TextArea1 } from "../../../../../../../../libs/Core/Core1/Fields/TextArea/TextArea1"
import { Button1, Div } from "../../../../../../../../libs/Core/Core2/fCore2"
import { PopUp } from "../../../../../../../../libs/Pop/Pop1/PopUp/PopUp"
import { AppleNewsHeader1 } from "../../../../../../../../libs/Pop/Pop2/fPop2"
import { SocialColor } from "../../../../../CSS/SocialColor"
import { ISocialService } from "../../../../../Model/ISocialService"

interface IEditServicePopUpProp {
  service0: ISocialService
  show: boolean
  setShow: (show: boolean)=>void
  refresh: ()=>void
}

export function EditServicePopUp({
  service0,
  show, setShow,
  refresh
}: IEditServicePopUpProp) {

  const [name, setName] = useState<string>("")
  const [shortDescription, setShortDescription] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [price, setPrice] = useState<string>("")

  const shield = useShield()

  useEffect(()=>{
    setName(service0.name)
    setShortDescription(service0.shortDescription || "")
    setDescription(service0.description || "")
    setPrice(service0.price || "")
  }, [service0])

  async function onSave() {
    await Post2(shield, "/social/SaveService", {
      serviceId: service0._id,
      name,
      shortDescription,
      price,
      description
    },(res)=>{
      setShow(false)
      refresh()
    })
  }

  async function deleteService() {
    if(!confirm(`Delete ${name}?`)) return
    if(!service0 || !service0._id) return
    await Post2(shield, "/social/DeleteService",{
      serviceId: service0._id
    }, (res)=>{
      setShow(false)
      refresh()
    })
  }

  const header = service0.isGoods? "Item" :  "Serice"
  return(<>
    <PopUp show={show} setShow={setShow}
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

      <Button1 text="Delete" color={SocialColor.$errorRed}
        onClick={deleteService} />
    </PopUp>
  </>)
}