import { useEffect, useRef, useState } from "react"
import { FileInput, Get2, IFormTextField, useShield } from "../../../../../../../../libs/Core/Core1/fCore1"
import { IProject } from "../../../../../Model/IProject"
import { SettingSectionHeader } from "../H/SettingSection/SettingSectionHeader"
import cl from "./BookCover.module.scss"

interface IBookCoverProp {
  project: IProject
}

export function BookCover({
  project
}: IBookCoverProp) {

  const [imageUrl, setImageUrl] = useState<string>("")
  const [bookCoverLoaded, setBookCoverLoaded] = useState<boolean>(false)

  const fileInputRef = useRef<HTMLInputElement>(null)
  const shield = useShield()
  
  function onClickPencil() {
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
    if(res.imageUrl) {
      setImageUrl(res.imageUrl)
    }
  }

  const formTextFields: Array<IFormTextField> = [
    {key: "projectId", value: project.id}
  ]

  async function loadBookCover(onOk: (res: any)=>void) {
    await Get2(shield, `/movic/LoadBookCover?projectId=${project.id}`, onOk)
  }

  useEffect(()=>{
    if(bookCoverLoaded) return
    loadBookCover((res)=>{
      setBookCoverLoaded(true)
      if(res.imageUrl) {
        setImageUrl(res.imageUrl)
      }
    })
  })

  return(<>
    <SettingSectionHeader title="Cover Image"
      onClickPencil={onClickPencil}
    />
    <div className={cl.imageSpace}>
      <div className={cl.image} 
        style={{backgroundImage:`url(${imageUrl || "/apps/Book/Img/bookCover.jpg"})`}}>
      </div>
    </div>
    <FileInput formTextFields={formTextFields}
      clear = { fileInputClear }
      ref={fileInputRef}
      route="/movic/UploadBookCover" onSuccess={afterUpload}/>
  </>)
}