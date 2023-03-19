import { useState } from "react"
import { Alert, Post2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv, AutoRepeatGrid, Div } from "../../../../../../../libs/Core/Core2/fCore2"
import { LingoAdminColor } from "../../../../CSS/LingoAdminColor"
import { IImageFile2 } from "../../../../Model/IImageFile"
import { IUnit } from "../../../../Model/IUnit"
import { EditName } from "./EditName"

interface IEditNamesProp {
  unit: IUnit,
  imageFiles0: Array<IImageFile2>
  quitEdit: ()=>void
}
export function EditNames({
  unit,
  imageFiles0,
  quitEdit
}: IEditNamesProp) {

  const [imageFiles, setImageFiles] = useState<Array<IImageFile2>>(imageFiles0)
  const [hasChange, setHasChange] = useState<boolean>(false)
  const shield = useShield()

  function hasEmptyName() {
    for(const image of imageFiles) {
      if(!image.name) return true
      if(!image.name.trim()) return true
    } 
    return false
  }
  async function save() {
    if(hasEmptyName()) {
      Alert("Image name cannot be empty.")
    } 
    await Post2(shield, "/lingoAdmin/ChangeImageNames", {
      unitId: unit._id,
      imageFiles
    }, (res)=>{
      quitEdit()
    })

  }

  function onChange(newValue: string, _id: string) {
    const newImageFiles = []
    for(const image of imageFiles) {
      if(image._id.toString() === _id) {
        image.name = newValue
      }
      newImageFiles.push(image)
    }
    setImageFiles(newImageFiles)
    if(!hasChange) {
      setHasChange(true)
    }
  }

  return(<>
  <Div height={10} />
    <AutoRepeatGrid autoFill cellMinWidth={150} columnGap={5} rowGap={5} padding={10}>
    {
      imageFiles.map((image, i)=>
        <div key={image._id.toString()}>
          <EditName url={image.urlSmall} value={image.name}
            onChange={(newValue: string)=>{
              onChange(newValue, image._id.toString())
            }}/>
        </div>
      )
    }
    </AutoRepeatGrid>
    <AppleWindowBottomBarFill />
    <AppleWindowPlainBottomBarDiv>
      <AppleIconButtons color={LingoAdminColor.themeBlue}
       icon1="chevron.left" onClick1={quitEdit}
       icon5="floppydisk" onClick5={save} disabled5={!hasChange || hasEmptyName()}
      />
    </AppleWindowPlainBottomBarDiv>
  </>)
}