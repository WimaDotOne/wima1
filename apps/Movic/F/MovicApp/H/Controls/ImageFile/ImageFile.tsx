import { useState } from "react"
import { SvgIcon } from "../../../../../../../libs/Core/Core2/Svg/SvgIcon"
import cl from "./ImageFile.module.scss"

interface IImageFileProp {
  url: string
  fileName: string
}
export function ImageFile({
  url,
  fileName
}: IImageFileProp) {

  const [selected, setSelected] = useState<boolean>(false)

  const imageStyle = {
    backgroundImage: `url(${url})`
  }

  function toggleSelect() {
    setSelected((prev)=> !prev)
  }
  return(<>
    <div className={cl.imageFile} onClick={toggleSelect}>
      <div className={cl.image} style={imageStyle}>
      {
        selected ?       
        <div className={cl.checkMarkDiv}>
          <SvgIcon name="checkmark.disk" color="#5eabee" width={15}/>
        </div>:null
      }
      </div>
      <div className={cl.fileName}>
        {fileName}
      </div>
    </div>
  </>)
}