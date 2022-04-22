import { useState } from "react"
import { SvgIcon } from "../../../../../../../libs/Core/Core2/Svg/SvgIcon"
import cl from "./ImageFile.module.scss"

interface IImageFileProp {
  url: string
  fileName: string
  selected?: boolean
  onClick?: ()=>void
}
export function ImageFile({
  url,
  fileName,
  selected,
  onClick
}: IImageFileProp) {


  const imageStyle = {
    backgroundImage: `url(${url})`
  }

  return(<>
    <div className={cl.imageFile}>
      <div className={cl.image} style={imageStyle}
        onClick={onClick}>
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