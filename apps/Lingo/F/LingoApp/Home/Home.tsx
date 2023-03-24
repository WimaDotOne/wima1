import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { IUnit } from "../../../../../admin/Lingo/F/Model/IUnit"
import { Get2, SelectField2, useShield } from "../../../../../libs/Core/Core1/fCore1"
import { Button1, Div, LimitWidth } from "../../../../../libs/Core/Core2/fCore2"
import { StripeHeader1, StripeIntroText, Wave } from "../../../../../libs/Pop/Pop2/fPop2"
import { LingoColor } from "../../CSS/LingoColor"
import { Lang } from "../../Model/Lang"
import { LanguageOptions, LessonOptions, LevelOptions, UnitIndex, WhichUnit } from "./H/CountUnit"
import cl from "./Home.module.scss"

interface IHomeProp {
  
}
export function Home({
  
}: IHomeProp) {

  const [lang, setLang] = useState<string>(Lang.Spanish)
  const [level, setLevel] = useState<string>("1")
  const [lesson, setLesson] = useState<string>("1")
  const [chineseUnits, setChineseUnits] = useState<Array<IUnit>>([])
  const [spanishUnits, setSpanishUnits] = useState<Array<IUnit>>([])
  const [frenchUnits, setFrenchUnits] = useState<Array<IUnit>>([])
  const [germanUnits, setGermanUnits] = useState<Array<IUnit>>([])

  const router = useRouter()
  const shield = useShield()
  
  const langOptions = LanguageOptions()
  const levelOptions = LevelOptions(countUnit(lang))
  const lessonOptions = LessonOptions(countUnit(lang), +level)

  function goUnit() {
    const index = UnitIndex(+level, +lesson)
    let units: Array<IUnit> = []
    switch(lang) {
      case Lang.Chinese: 
        units = chineseUnits
        break
      case Lang.Spanish: 
        units = spanishUnits
        break
      case Lang.French: 
        units = frenchUnits
        break
      case Lang.German: 
        units = germanUnits
        break
      default:
    }
    const unit = units[index]
    router.push(`/apps/Lingo/AppTurn/Unit/?unitId=${unit?._id}&lang=${lang}`)
  }

  function countUnit(lang: string) {
    switch(lang) {
      case Lang.Chinese: return chineseUnits.length
      case Lang.Spanish: return spanishUnits.length
      case Lang.French: return frenchUnits.length
      case Lang.German: return germanUnits.length
      default: return 1
    }
  }

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

  async function loadUnits() {
    await Get2(shield, "/lingo/LoadUnits", (res)=>{
      setChineseUnits(res.chineseUnits)
      setSpanishUnits(res.spanishUnits)
      setFrenchUnits(res.frenchUnits)
      setGermanUnits(res.germanUnits)
    })
  }

  useEffect(()=>{
    loadUnits()
  }, [])


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
      <Button1 onClick={goUnit} text="Start Learning ➽" color={LingoColor.themeBlue}/>
    </div>
    <Div height={40} />
    <LimitWidth gray>
      <Div height={30} />
      <StripeIntroText title="Browser support"
        text1="Please use Chrome or Edge in a desktop to get the full speaking and reading functionality."
        text2="If the browser does not support speech or voice recognition, you can still type in the phrase as a spelling practice. Our voice recognition may not even recognize native speakers anyway." />
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