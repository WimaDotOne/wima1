import { SelectField2 } from "../../../../../../libs/Core/Core1/fCore1"
import { Button1, Div, LimitWidth } from "../../../../../../libs/Core/Core2/fCore2"
import { StripeHeader1, StripeIntroText, Wave } from "../../../../../../libs/Pop/Pop2/fPop2"
import { LingoColor } from "../../../CSS/LingoColor"
import { LanguageOptions, LevelOptions, LessonOptions } from "../../../Model/Settings"
import cl from "./Landing.module.scss"

interface ILandingProp {
  lang: string
  setLang: (lang:string)=>void
  level: string
  setLevel: (level:string)=>void
  lesson: string
  setLesson: (lesson:string)=>void
  goBook: ()=>void
}
export function Landing({
  lang, setLang,
  level, setLevel,
  lesson, setLesson,
  goBook
}: ILandingProp) {
  
  const langOptions = LanguageOptions()
  const levelOptions = LevelOptions(lang)
  const lessonOptions = LessonOptions(lang, level)

  function setLang2(newLang: string) {
    if(newLang !== lang) {
      setLevel("1")
      setLesson("1")
    }
    setLang(newLang)
  }

  function setLevel2(newLevel: string) {
    if(newLevel !== level) {
      setLesson("1")
    }
    setLevel(newLevel)
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
        <SelectField2 value={lang}
          setValue={setLang2}
          options={langOptions} hasImage />
      </div>
      <SelectField2 value={level} setValue={setLevel2} options={levelOptions} />
      <SelectField2 value={lesson} setValue={setLesson} options={lessonOptions} />
    </div>
    <div className={cl.goDiv}>
      <Button1 onClick={goBook} text="Start Learning ➽" color={LingoColor.themeBlue}/>
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