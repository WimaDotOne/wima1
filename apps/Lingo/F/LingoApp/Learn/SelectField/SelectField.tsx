import { useState } from "react"
import { ClassNames } from "../../../../../../libs/Core/Core1/fCore1"
import { SvgIcon } from "../../../../../../libs/Core/Core2/Svg/SvgIcon"
import { IOption, Options } from "../../../Model/Options"
import cl from "./SelectField.module.scss"

interface ISelectFieldProp {
  value: string
  setValue: (value: string)=>void
  options: Options
}
export function SelectField({
  value,
  setValue,
  options
}:ISelectFieldProp) {
  if(!options || !options.array) {
    return null
  }
  
  const [drop, setDrop] = useState<boolean>(false)

  function getOption() {
    for(const opt of options.array) {
      if(opt.value === value) {
        return opt
      }
    }
    return null
  }

  function onClickInput() {
    setDrop((prev)=>!prev)
  }
  function onClickOption(opt: IOption) {
    setValue(opt.value)
    setDrop(false)
  }
  const clDrop = drop ? cl.drop : ""
  const option = getOption()
  return(<>
    <div className={cl.selectField}>
      <div className={ClassNames([cl.inputDiv, clDrop])} onClick={onClickInput}>
        <Image hasImage={options.hasImage} imageUrl={option?.imgUrl}/>
        <Text text={option?.text || ""}/>
        <div className={cl.arrow}>
          <SvgIcon name="chevron.down" width={12} color="black" strokeWidth={2}/>
        </div>
      </div>
      {
        drop ?
        <div className={ClassNames([cl.options])}>
        {
          options.array.map((opt, i)=>
          <div key={i} className={cl.option} 
            onClick={()=>{ onClickOption(opt)}}>
            <Image hasImage={options.hasImage} imageUrl={opt.imgUrl} />
            <Text text={opt.text} />
          </div>
          )
        }
        </div>:null
      }
    </div>
  </>)
}

interface IImageProp {
  hasImage: boolean
  imageUrl?: string
}
export function Image({
  hasImage,
  imageUrl
}:IImageProp) {
  if(!hasImage) return null
  return(<>
    <div className={cl.imgDiv}>
      <div className={cl.image}
        style={{backgroundImage: `url(${imageUrl})`}}></div>
    </div>
  </>)
}

interface ITextProp {
  text: string
}
export function Text({
  text
}: ITextProp) {
  return(<>
    <div className={cl.text}>
      <div className={cl.textInner}>
        {text}
      </div>
    </div>
  </>)
}