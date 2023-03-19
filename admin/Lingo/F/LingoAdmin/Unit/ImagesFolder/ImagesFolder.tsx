import { useEffect, useRef, useState } from "react"
import { FindADuplicateName, OrderImageFilesByName } from "./Helper.js"
import { EditNames } from "./EditNames/EditNames"
import cl from "./ImagesFolder.module.scss"
import { IUnit } from "../../../Model/IUnit"
import { LingoAdminColor } from "../../../CSS/LingoAdminColor"
import { IImageFile2 } from "../../../../../../apps/Movic/F/Model/IImageFile.js"
import { FileInput, Get2, IFormTextField, Post2, useShield } from "../../../../../../libs/Core/Core1/fCore1"
import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv, AutoRepeatGrid, Div } from "../../../../../../libs/Core/Core2/fCore2"
import { ImageFile } from "../../../../../../apps/Movic/F/MovicApp/H/Controls/ImageFile/ImageFile"

interface IImagesFolderProp {
  unit: IUnit
  backToUnitHome: ()=>void
}

export function ImagesFolder({
  unit,
  backToUnitHome
}: IImagesFolderProp) {

  const fileInputRef = useRef<HTMLInputElement>(null)
  const [toSelectAll, setToSelectAll] = useState<boolean>(true)
  const [imageFolderLoaded, setImageFolderLoaded] = useState<boolean>(false)
  const [imageFiles, setImageFiles] = useState<Array<IImageFile2>>([])
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const shield = useShield()

  async function loadImageFolder() {
    if(imageFolderLoaded) return
    await Get2(shield, `/lingoAdmin/LoadImageFolder?unitId=${unit._id}`, (res)=>{
      setImageFolderLoaded(true)
      setImageFiles(OrderImageFilesByName(res.imageFiles))
    })
  }

  useEffect(()=>{
    loadImageFolder()
  })

  async function trash() {
    
    const imageFileIds = []
    for(const image of imageFiles) {
      if(image.selected) {
        imageFileIds.push(image._id.toString())
      }
    }
    const wordImage = imageFileIds.length > 1 ? "images" : "image"
    if(!confirm(`Delete ${imageFileIds.length} ${wordImage}?`)) return

    await Post2(shield, "/lingoAdmin/DeleteUnitImages",
    {
      unitId: unit._id,
      imageFileIds
    }, (res)=>{
      setImageFolderLoaded(false)
    })
  }
  function edit() {
    setIsEdit(true)
  }

  function startUpload() {
    const input = fileInputRef.current
    if(!input) return
    input.click()
  }

  function fileInputClear() {
    const input = fileInputRef.current
    if(!input) return
    input.value = ""
  }

  function afterUpload(res: any) {
    setImageFolderLoaded(false)
  }

  function toggleSelectAll() {
    const newImages = new Array<IImageFile2>()
    for(let i=0; i<imageFiles.length; i++) {
      const image = imageFiles[i]
      if(image) {
        image.selected = toSelectAll
        newImages.push(image)
      }
    }
    setImageFiles(newImages)
    setToSelectAll(!toSelectAll)
  }

  function selectImage(imageId: string) {
    const newImages = new Array<IImageFile2>()
    for(let i=0; i<imageFiles.length; i++) {
      const image = imageFiles[i]
      if(image && image._id === imageId) {
        image.selected = !image.selected
      }
      newImages.push(image)
    }
    setImageFiles(newImages)
  }

  function selectedImageCount() {
    const selectedImages = imageFiles.filter((image)=> image.selected)
    return selectedImages.length
  }

  const imageSelected = selectedImageCount() > 0
  const selectAllIcon =  toSelectAll ? "checkmark.doublesquare":"doublesquare"
  
  const formTextFields: Array<IFormTextField> = [
    {key: "unitId", value: unit._id}
  ]

  if(isEdit) {
    return(<EditNames 
      unit={unit}
      imageFiles0={imageFiles.filter(image => image.selected)}
      quitEdit={()=>{setIsEdit(false)}}
    />)
  }

  const duplicateName = FindADuplicateName(imageFiles)
  
  return(<>
    <Div height={10} />
    {
      duplicateName ? 
      <div className={cl.warning}>
      {`There are two images with the same name (${duplicateName}). Only one can be randomly chosen to be used in a movic.`}
      </div>: null
    }
    <AutoRepeatGrid autoFill cellMinWidth={100} columnGap={3} rowGap={5} padding={10}>
    {
      imageFiles.map((image, i)=>
        <ImageFile key={image._id.toString()} url={image.urlSmall} fileName={image.name} 
          selected={image.selected}
          onClick={()=>{selectImage(image._id.toString())}}/>
      )
    }
    </AutoRepeatGrid>
    <AppleWindowBottomBarFill />
    <AppleWindowPlainBottomBarDiv>
      <AppleIconButtons color={LingoAdminColor.themeBlue}
       icon1="chevron.left" onClick1={backToUnitHome}
       icon2={selectAllIcon} onClick2={toggleSelectAll}
       icon3="trashbin" onClick3={trash} disabled3 = {!imageSelected}
       icon5="pencil" onClick5={edit} disabled5 = {!imageSelected}
       icon6="plus" onClick6={startUpload}
      />
    </AppleWindowPlainBottomBarDiv>
    <FileInput formTextFields={formTextFields}
      multiple
      clear = { fileInputClear }
      ref={fileInputRef}
      route="/lingoAdmin/UploadImages" onSuccess={afterUpload}/>
  </>)
}