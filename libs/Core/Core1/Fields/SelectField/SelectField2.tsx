import { useRef, useState } from "react"
import { SvgIcon } from "../../../Core2/Svg/SvgIcon"
import { ClassNames } from "../../fCore1"
import { ISelectOption } from "./ISelectOption"
import cl from "./SelectField2.module.scss"

interface ISelectField2Prop {
  value: string
  setValue: (value: string)=>void
  options: Array<ISelectOption>
  hasImage?: boolean
}
export function SelectField2({
  value,
  setValue,
  options,
  hasImage
}:ISelectField2Prop) {
  if(!options) {
    return null
  }
  
  const [drop, setDrop] = useState<boolean>(false)

  function getOption() {

    for(const opt of options) {
      if(opt.value === value) {
        return opt
      }
    }
    return null
  }

  function onInputBlur() {

    //Click an option would blur the input,
    //blur the input causes drop to close,
    //Closing the drop too early would result no click on drop option
    //That's why we delay for a second, which only seems slow when clicking outside dropdown.
    setTimeout(()=>{
      setDrop(false)
    }, 1000)
  }

  function onClickInput() {
    setDrop(!drop)
  }

  function onClickOption(opt: ISelectOption) {
    setValue(opt.value)
    setDrop(false)
  }
  const clDrop = drop ? cl.drop : ""
  const option = getOption()
  return(<>
    <div className={cl.selectField}>
      <div className={ClassNames([cl.inputDiv, clDrop])}>
        <div className={cl.inputInnerDiv}>
          <Image hasImage={hasImage} imageUrl={option?.imgUrl}/>
          <Text text={option?.text || ""}/>
          <div className={cl.arrow}>
            <SvgIcon name="chevron.down" width={12} color="black" strokeWidth={2}/>
          </div>
        </div>
        <input className={cl.input} value="" readOnly
          onBlur={onInputBlur}
          onClick={onClickInput}
        />
      </div>

      {
        drop ?
        <div className={ClassNames([cl.options])}>
        {
          options.map((opt, i)=>
          <div key={i} className={cl.option} 
            onClick={()=>{ 
              onClickOption(opt)
            }}>
            <Image hasImage={hasImage} imageUrl={opt.imgUrl} />
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
  hasImage?: boolean
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

function GetText(value: string, options: Array<ISelectOption>) {
  if(!value) return ""
  if(!options) return ""
  for(const opt of options) {
    if(value === opt.value) return opt.text
  }
  return ""
}