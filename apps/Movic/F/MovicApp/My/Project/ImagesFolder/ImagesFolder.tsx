import { AppleIconButtons, AppleWindowPlainBottomBarDiv, AutoRepeatGrid, Div } from "../../../../../../../libs/Core/Core2/fCore2"
import { ImageFile } from "../../../H/Controls/ImageFile/ImageFile"
import { AppleWindowBottomBarFill } from "../../../../../../../libs/Core/Core2/fCore2"
import { MovicColor } from "../../../../CSS/MovicColor"
import { useEffect, useRef, useState } from "react"
import { FileInput, Get2, IFormTextField, Post2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { IProject } from "../../../../Model/IProject"
import { IImageFile2 } from "../../../../Model/IImageFile"
import { OrderImageFilesByName } from "./Order.js"
import { EditNames } from "./EditNames/EditNames"

interface IImagesFolderProp {
  project: IProject
  backToProjectHome: ()=>void
}

export function ImagesFolder({
  project,
  backToProjectHome
}: IImagesFolderProp) {

  const fileInputRef = useRef<HTMLInputElement>(null)
  const [toSelectAll, setToSelectAll] = useState<boolean>(true)
  const [imageFolderLoaded, setImageFolderLoaded] = useState<boolean>(false)
  const [imageFiles, setImageFiles] = useState<Array<IImageFile2>>([])
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const shield = useShield()

  async function loadImageFolder() {
    if(imageFolderLoaded) return
    await Get2(shield, `/movic/LoadImageFolder?projectId=${project.id}`, (res)=>{
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
    
    await Post2(shield, "/movic/DeleteProjectImages",
    {
      projectId: project.id,
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
    {key: "projectId", value: project.id}
  ]

  if(isEdit) {
    return(<EditNames 
      project={project}
      imageFiles0={imageFiles.filter(image => image.selected)}
      quitEdit={()=>{setIsEdit(false)}}
    />)
  }
  
  return(<>
    <Div height={10} />
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
      <AppleIconButtons color={MovicColor.themeRed}
       icon1="chevron.left" onClick1={backToProjectHome}
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
      route="/movic/UploadImages" onSuccess={afterUpload}/>
  </>)
}