import { useRef, useState } from "react"
import { FileInput, IFormTextField, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { ReadEditHeader } from "../../../../../../../libs/Pop/Pop1/fPop1"
import { IJob } from "../../../../Model/IJob"
import cl from "./Photo.module.scss"

interface IPhotoProp {
  job: IJob
}

export function Photo({
  job
}: IPhotoProp) {

  const [imageUrl, setImageUrl] = useState<string>(job.selfPhoto?.urlSmall || "")

  const fileInputRef = useRef<HTMLInputElement>(null)
  
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
    {key: "jobId", value: job.id}
  ]

  return(<>
    <ReadEditHeader title="Photo"
      description="A photo is how people identify you."
      onClickPencil={onClickPencil}
    />
    <div className={cl.imageSpace}>
      <div className={cl.image} 
        style={{backgroundImage:`url(${imageUrl || "/apps/Tip/Illustration/profile.png"})`}}>
      </div>
    </div>
    <FileInput formTextFields={formTextFields}
      clear = { fileInputClear }
      ref={fileInputRef}
      route="/tip/UploadAttendantPhoto" onSuccess={afterUpload}/>
  </>)
}