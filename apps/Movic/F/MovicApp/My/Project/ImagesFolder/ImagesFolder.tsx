import { AppleIconButtons, AppleWindowPlainBottomBarDiv, AutoRepeatGrid } from "../../../../../../../libs/Core/Core2/fCore2"
import { ImageFile } from "../../../H/Controls/ImageFile/ImageFile"
import { AppleWindowBottomBarFill } from "../../../../../../../libs/Core/Core2/fCore2"
import { MovicColor } from "../../../../CSS/MovicColor"
import { useEffect, useRef, useState } from "react"
import { FileInput, Get2, IFormTextField, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { IProject } from "../../../../Model/IProject"

interface IImagesFolderProp {
  project: IProject
  backToProjectHome: ()=>void
}

interface IImage {
  _id: string
  urlSmall: string
  name: string
  selected?: boolean
}

export function ImagesFolder({
  project,
  backToProjectHome
}: IImagesFolderProp) {

  const fileInputRef = useRef<HTMLInputElement>(null)
  const [toSelectAll, setToSelectAll] = useState<boolean>(true)
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false)
  const [images, setImages] = useState<Array<IImage>>([])

  const shield = useShield()

  async function loadImages() {
    if(imagesLoaded) return
    await Get2(shield, `/movic/LoadImageFolder?projectId=${project.id}`, (res)=>{
      setImagesLoaded(true)
      console.log(res.imageFiles)
      setImages(res.imageFiles)
    })
  }

  useEffect(()=>{
    loadImages()
  })

  function trash() {

  }
  function edit() {

  }

  function upload() {
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
    setImagesLoaded(false)
  }

  function toggleSelectAll() {
    const newImages = new Array<IImage>()
    for(let i=0; i<images.length; i++) {
      const image = images[i]
      if(image) {
        image.selected = toSelectAll
        newImages.push(image)
      }
    }
    setImages(newImages)
    setToSelectAll(!toSelectAll)
  }

  function selectImage(imageId: string) {
    const newImages = new Array<IImage>()
    for(let i=0; i<images.length; i++) {
      const image = images[i]
      if(image && image._id === imageId) {
        image.selected = !image.selected
      }
      newImages.push(image)
    }
    setImages(newImages)
  }

  function selectedImageCount() {
    const selectedImages = images.filter((image)=> image.selected)
    return selectedImages.length
  }


  const imageSelected = selectedImageCount() > 0
  const selectAllIcon =  toSelectAll ? "checkmark.doublesquare":"doublesquare"
  
  const formTextFields: Array<IFormTextField> = [
    {key: "projectId", value: project.id}
  ]
  
  return(<>
    <AutoRepeatGrid autoFill cellMinWidth={100} columnGap={3} rowGap={5} padding={10}>
    {
      images.map((image, i)=>
        <ImageFile key={image._id.toString()} url={image.urlSmall} fileName={image.name} selected={image.selected}
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
       icon6="plus" onClick6={upload}
      />
    </AppleWindowPlainBottomBarDiv>
    <FileInput formTextFields={formTextFields}
      multiple
      clear = { fileInputClear }
      ref={fileInputRef}
      route="/movic/UploadImages" onSuccess={afterUpload}/>
  </>)
}