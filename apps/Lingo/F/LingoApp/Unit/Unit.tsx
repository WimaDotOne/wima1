import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../../libs/Core/Core1/fCore1"
import { Button1, Div, SvgIcon } from "../../../../../libs/Core/Core2/fCore2"
import { Pagination } from "../../../../../libs/Pop/Pop1/fPop1"
import { LingoColor } from "../../CSS/LingoColor"
import { IPage } from "../../Model/IPage"
import { LingoWindow } from "../LingoWindow/LingoWindow"
import { RepeatCard } from "./Card/RepeatCard/RepeatCard"
import { Keyboard } from "./Keyboard/Keyboard"
import cl from "./Unit.module.scss"

interface IUnitProp {
}
export function Unit({

}: IUnitProp) {

  const [page, setPage] = useState<number| string>(1)
  const [totalPage, setTotalPage] = useState<number|string>(1)
  const [pages, setPages] = useState<Array<IPage>>([])
  
  const shield = useShield()
  const router = useRouter()

  const lang = router.query.lang as string
  const unitId = router.query.unitId as string

  function goHome() {
    router.push("/apps/Lingo")
  }

  async function loadUnit() {

   if(!unitId) return
   if(unitId === "undefined") return
   
   await Get2(shield, `/lingo/LoadUnit?unitId=${unitId}`, (res)=>{
      const pages = res.pages
      if(!pages || !pages.length) return
      setPages(pages)
      setTotalPage(pages.length)
    })
  }

  function next() {
    if(page < totalPage) {
      setPage(+page+1)
    }
  }

  useEffect(()=>{
    loadUnit()
  },[])

  const words = pages[+page-1] || []

  return(<><LingoWindow>

  <div className={cl.book}>
    <div className={cl.homeDiv} onClick={goHome}>
      <SvgIcon name="home" width={24} color="#f7f7f7" />
    </div>
    <div className={cl.paginationDiv}>
      <Pagination page={page} setPage={setPage} totalPage={totalPage}/>
    </div>
    <div className={cl.keyboardDiv}>
      <Keyboard lang={lang} />
    </div>
    <div className={cl.words}>
    {
      words.map((word, i)=>
        <RepeatCard key={page+"-"+i}
          autoFocus={i===0}
          lang={lang}
          word={word.word}
          pinYin={word.pinYin}
          translate={word.translate}
          imageUrl={word.imageUrl}
        />)
      
    }
    </div>
    <Div height={20} />
    <div className={cl.buttonDiv}>
      {
        page < totalPage ? 
        <Button1 text=">" onClick={next} color={LingoColor.themeBlue}/>
        :null
      }
    </div>
    <Div height={20} />
  </div>
  </LingoWindow></>)
}