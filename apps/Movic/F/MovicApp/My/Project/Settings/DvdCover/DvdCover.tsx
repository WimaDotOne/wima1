import { useEffect, useRef, useState } from "react"
import { FileInput, Get2, IFormTextField, useShield } from "../../../../../../../../libs/Core/Core1/fCore1"
import { IProject } from "../../../../../Model/IProject"
import { SettingSectionHeader } from "../H/SettingSection/SettingSectionHeader"
import cl from "./DvdCover.module.scss"

interface IDvdCoverProp {
  project: IProject
}

export function DvdCover({
  project
}: IDvdCoverProp) {

  const [imageUrl, setImageUrl] = useState<string>("")
  const [dvdCoverLoaded, setDvdCoverLoaded] = useState<boolean>(false)

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

  async function loadDvdCover(onOk: (res: any)=>void) {
    await Get2(shield, `/movic/LoadDvdCover?projectId=${project.id}`, onOk)
  }

  useEffect(()=>{
    if(dvdCoverLoaded) return
    loadDvdCover((res)=>{
      setDvdCoverLoaded(true)
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
        style={{backgroundImage:`url(${imageUrl || "/apps/Movic/Icon/dvdCover.jpg"})`}}>
      </div>
    </div>
    <FileInput formTextFields={formTextFields}
      clear = { fileInputClear }
      ref={fileInputRef}
      route="/movic/UploadDvdCover" onSuccess={afterUpload}/>
  </>)
}