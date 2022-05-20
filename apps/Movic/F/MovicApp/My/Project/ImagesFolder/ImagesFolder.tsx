import { AppleIconButtons, AppleWindowPlainBottomBarDiv, AutoRepeatGrid } from "../../../../../../../libs/Core/Core2/fCore2"
import { ImageFile } from "../../../H/Controls/ImageFile/ImageFile"
import { AppleWindowBottomBarFill } from "../../../../../../../libs/Core/Core2/fCore2"
import { MovicColor } from "../../../../CSS/MovicColor"
import { useRef, useState } from "react"
import { FileInput, IFormTextField } from "../../../../../../../libs/Core/Core1/fCore1"
import { IProject } from "../../../../Model/IProject"

interface IImagesFolderProp {
  project: IProject
  backToProjectHome: ()=>void
}

interface IImage {
  id: string
  url: string
  name: string
  selected?: boolean
}

export function ImagesFolder({
  project,
  backToProjectHome
}: IImagesFolderProp) {

  const fileInputRef = useRef<HTMLInputElement>(null)
  const [toSelectAll, setToSelectAll] = useState<boolean>(true)
  const [images, setImages] = useState<Array<IImage>>([
    { id: "1", url: "/favicon.ico", name: "m1" },
    { id: "2", url: "/apps/Movic/Test/test.png", name: "m2" },
    { id: "3", url: "/apps/Movic/Test/test2.png", name: "m3" },
    { id: "4", url: "/apps/Movic/Test/test3.png", name: "m4" },
    { id: "5", url: "/apps/Movic/Test/test4.jpg", name: "m5" },
    { id: "6", url: "/apps/Movic/Test/test2.png", name: "m6" },
    { id: "7", url: "/favicon.ico", name: "W1" }
  ])

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
    console.log(res)
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
      if(image && image.id === imageId) {
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
        <ImageFile key={image.id} url={image.url} fileName={image.name} selected={image.selected}
          onClick={()=>{selectImage(image.id)}}/>
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