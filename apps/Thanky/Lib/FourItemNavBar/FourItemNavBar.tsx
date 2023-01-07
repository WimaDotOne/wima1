import { useRouter } from "next/router"
import { ClassNames } from "../../../../libs/Core/Core1/fCore1"
import cl from "./FourItemNavBar.module.scss"

interface IFourItemNavBarProp {
  homeIconUrl: string
  text1: string
  text2: string
  text3: string
  text4: string
  homeRoute: string
  route1: string
  route2: string
  route3: string
  route4: string
  selected1?: boolean
  selected2?: boolean
}

export function FourItemNavBar({
  homeIconUrl,
  text1,
  text2,
  text3,
  text4,
  homeRoute,
  route1,
  route2,
  route3,
  route4,
  selected1,
  selected2
}: IFourItemNavBarProp) {

  const router = useRouter()

  function routeTo(route: string) {
    router.push(route)
  }

  const clSelected1 = selected1 ? cl.selected1 : ""
  const clSelected2 = selected2 ? cl.selected2 : ""

  return(<>
    <div className={cl.bar}>
      <div className={cl.homeIconSpace}>
        <div className={cl.homeIcon} 
          style={{backgroundImage: `url(${homeIconUrl})`}}>
        </div>
      </div>
      <div className={cl.leftTwoItems}>
        <div className={ClassNames([cl.item, clSelected1])}
          onClick={()=>{routeTo(route1)}}
        >{text1}</div>
        <div className={ClassNames([cl.item, clSelected2])}
          onClick={()=>{routeTo(route2)}}
        >{text2}</div>
      </div>
      <div className={cl.rightTwoItems}>
        <div className={cl.item}
          onClick={()=>{routeTo(route3)}}
        >{text3}</div>
        <div className={ClassNames([cl.item, cl.item4])}
          onClick={()=>{routeTo(route4)}}
        >{text4}</div>
      </div>
    </div>
  </>)
}