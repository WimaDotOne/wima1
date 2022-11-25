import { useEffect } from "react"
import { IconButtons } from "../../../../../../libs/Core/Core2/AppleWindow/F/View/IconButtons/IconButtons"
import { AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv, Button1, Div } from "../../../../../../libs/Core/Core2/fCore2"
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

  useEffect(()=>{
    if(window) {
      window.scrollTo(0, 0)
    }
  })

  if(!drink) {
    return null
  }

  const steps = drink.steps

  return(<>
  <div className={cl.drinkName}>{drink.name} ({drink.code})</div>
  <div className={cl.size}>{size}</div>
  <div className={cl.steps}>
  {
    steps.map((step, i)=>
    <div key={i} className={cl.stepCardSpace}>
      <StepCard step={step} size={size}/>
    </div>
    )
  }
  </div>
  <Div height={20} />
  <div className={cl.buttonSpace}>
    <Button1  text="Back to menu" onClick={goMenu} />
  </div>
  <Div height={50} />

  <AppleWindowBottomBarFill />
  <AppleWindowPlainBottomBarDiv>
    <IconButtons icon1="chevron.left" 
      onClick1={goMenu}
    />
  </AppleWindowPlainBottomBarDiv>
  </>)
}