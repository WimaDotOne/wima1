import { useRouter } from "next/router"
import { ClassNames } from "../../../../libs/Core/Core1/fCore1"
import cl from "./FourItemNavBar.module.scss"
import { INavModel } from "./INavModel"

interface IFourItemNavBarProp {
  navModel: INavModel
  selected1?: boolean
  selected2?: boolean
}

export function FourItemNavBar({
  navModel,
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
          onClick={()=>{routeTo(navModel.homeRoute)}}
          style={{backgroundImage: `url(${navModel.homeIconUrl})`}}>
        </div>
      </div>
      <div className={cl.leftTwoItems}>
        <div className={ClassNames([cl.item, clSelected1])}
          onClick={()=>{routeTo(navModel.route1)}}
        >{navModel.text1}</div>
        <div className={ClassNames([cl.item, clSelected2])}
          onClick={()=>{routeTo(navModel.route2)}}
        >{navModel.text2}</div>
      </div>
      <div className={cl.rightTwoItems}>
        <div className={cl.item}
          onClick={()=>{routeTo(navModel.route3)}}
        >{navModel.text3}</div>
        <div className={ClassNames([cl.item, cl.item4])}
          onClick={()=>{routeTo(navModel.route4)}}
        >{navModel.text4}</div>
      </div>
    </div>
  </>)
}