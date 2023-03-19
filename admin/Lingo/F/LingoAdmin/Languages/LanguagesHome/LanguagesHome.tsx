import { useRouter } from "next/router"
import { AutoRepeatGrid } from "../../../../../../libs/Core/Core2/fCore2"
import { AppleFolder, HeadLine } from "../../../../../../libs/Pop/Pop3/fPop3"
import { LanguageEnum } from "../../../../Enum/LanguageEnum"
import { LingoAdminColor } from "../../../CSS/LingoAdminColor"
import { LingoAdminWindow } from "../../LingoAdminWindow/LingoAdminWindow"
import cl from "./LanguagesHome.module.scss"

export function LanguagesHome() {

  const router = useRouter()

  function openLanguage(language: string) {
    router.push(`/admin/Lingo/Language?language=${encodeURIComponent(language)}`)
  }

  return(<><LingoAdminWindow>

    <div className={cl.languages}>
      <HeadLine text="Languages" color={LingoAdminColor.themeBlue}/>
      
      <AutoRepeatGrid autoFill cellMinWidth={100} columnGap={10} rowGap={10} paddingTop={25} paddingBottom={10}>
  
        <AppleFolder text="Spanish" onClick={()=>{openLanguage(LanguageEnum.Spanish)}} />
        <AppleFolder text="German"  onClick={()=>{openLanguage(LanguageEnum.German) }} />
        <AppleFolder text="French"  onClick={()=>{openLanguage(LanguageEnum.French) }} />
        <AppleFolder text="Chinese" onClick={()=>{openLanguage(LanguageEnum.Chinese)}} />
          
      </AutoRepeatGrid>
    </div>
    

  </LingoAdminWindow></>)
}