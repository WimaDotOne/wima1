import { useRouter } from "next/router"
import { IconButtons } from "../../../../../../libs/Core/Core2/AppleWindow/F/View/IconButtons/IconButtons"
import { AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv } from "../../../../../../libs/Core/Core2/fCore2"
import { AppleWindowBottomBar } from "../../../../../H/AppleWindowBottomBar"
import { IDrink } from "../../../Model/Drink"
import cl from "./Recipe.module.scss"
import { StepCard } from "./StepCard/StepCard"

interface IRecipeProp {
  drink?: IDrink,
  size: string,
  goMenu: ()=>void
}

export function Recipe({
  drink,
  size,
  goMenu
}: IRecipeProp) {

  if(!drink) {
    return(<></>)
  }

  const steps = drink.steps

  return(<>
  <div className={cl.drinkName}>{drink.name} ({drink.code})</div>
  <div className={cl.size}>{size}</div>
  <div className={cl.steps}>
  {
    steps.map((step, i)=>
    <div className={cl.stepCardSpace}>
      <StepCard step={step} size={size}/>
    </div>
    )
  }
  </div>

  <AppleWindowBottomBarFill />
  <AppleWindowPlainBottomBarDiv>
    <IconButtons icon1="chevron.left" 
      onClick1={goMenu}
    />
  </AppleWindowPlainBottomBarDiv>
  </>)
}