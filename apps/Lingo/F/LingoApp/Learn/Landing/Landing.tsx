import { Button1, Div, LimitWidth } from "../../../../../../libs/Core/Core2/fCore2"
import { StripeHeader1, StripeIntroText, Wave } from "../../../../../../libs/Pop/Pop2/fPop2"
import { LanguageOptions, UnitOptions } from "../../../Model/Settings"
import { SelectField } from "../SelectField/SelectField"
import cl from "./Landing.module.scss"

interface ILandingProp {
  lang: string,
  setLang: (lang:string)=>void
  unit: string
  setUnit: (unit:string)=>void
  goBook: ()=>void
}
export function Landing({
  lang, setLang,
  unit, setUnit,
  goBook
}: ILandingProp) {
  
  const langOptions = LanguageOptions()
  const unitOptions = UnitOptions(lang)

  function setLang2(newLang: string) {
    if(newLang !== lang) {
      setUnit("1")
    }
    setLang(newLang)
  }

  return(<>
    <LimitWidth yellow>
      <Div height={25} />
      <StripeHeader1 text1="Language for Beginners"
        text2="Click speaker icon to listen. Click mic icon to read, or just type in the phrase" />
      <Div height={30} />
    </LimitWidth>
    <Wave />
    <Div height={30} />

    <div className={cl.selections}>
      <div className={cl.langDiv}>
        <SelectField value={lang} setValue={setLang2} options={langOptions} />
      </div>
      <div className={cl.unitDiv}>
        <SelectField value={unit} setValue={setUnit} options={unitOptions} />
      </div>
    </div>
    <div className={cl.goDiv}>
      <Button1 onClick={goBook} text="Start Learning ➽"/>
    </div>
    <Div height={40} />
    <LimitWidth gray>
      <Div height={30} />
      <StripeIntroText title="Browser support"
        text1="Please use Chrome or Edge in a desktop to get the full speaking and reading functionality."
        text2="If the browser does not support voice recognition, you can still type in the phrase as a spelling practice. Our voice recognition is quite bad anyway." />
      <Div height={30} />
    </LimitWidth>
    <Div height={20} />
    <LimitWidth>
      <div className={cl.attributes}>
        <span>Photos by</span>  &nbsp; &nbsp;
        <a className={cl.vecteezy} target="_blank"
          href="https://www.vecteezy.com/free-photos" >
          Vecteezy
        </a> &nbsp; &nbsp;
        <a className={cl.freepik} target="_blank"
          href="https://www.freepik.com/" >
          Freepik
        </a> &nbsp; &nbsp;
        <a className={cl.istock} target="_blank"
          href="https://www.istockphoto.com/photos-free" >
          iStock
        </a> &nbsp; &nbsp;
        <a className={cl.shutterstock} target="_blank"
          href="https://www.shutterstock.com" >
          shutterstock
        </a> &nbsp; &nbsp;
      </div>

    </LimitWidth>
  </>)
}