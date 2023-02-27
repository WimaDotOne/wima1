import cl from "./PhotoInput.module.scss"
import { FileInput } from "../FileInput/FileInput"
import { useRef } from "react"
import { IFormTextField } from "../../Model/IFormTextField"

interface IPhotoInputProp {
  photoUrl?: string
  width?: number
  formTextFields?: Array<IFormTextField>
  route: string
  onSuccess: (res: any)=>void
}

export function PhotoInput({
  photoUrl,
  width,
  formTextFields,
  route,
  onSuccess
}: IPhotoInputProp) {

  const inputRef = useRef<HTMLInputElement>(null)

  function onClickPhotoInput() {
    const input = inputRef.current
    if(!input) return
    input.click()
  }

  width = width || 100
  const height = width

  return(<>
  <div className={cl.photoInput}
    onClick={onClickPhotoInput}
    style={{
      width: width+"px", 
      height: height+"px",
      backgroundImage: `url(${photoUrl})`
    }}
  >
    <div className={cl.cameraFilm}>
      <div className={cl.camera} style={{backgroundImage: `url(/libs/Common/Image/camera.svg)`}}/>
    </div>
  </div>
  <FileInput ref={inputRef} 
    formTextFields={formTextFields}
    route={route} onSuccess={onSuccess}/>
  </>)
}