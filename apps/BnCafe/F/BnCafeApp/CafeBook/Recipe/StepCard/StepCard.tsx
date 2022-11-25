import { StepFunction } from "../../../../Model/Drink"
import cl from "./StepCard.module.scss"

interface IStepCard {
  step: StepFunction
  size: string
}

export function StepCard({
  step,
  size
}: IStepCard) {

  const { image, words} = step(size)

  return(<>
    <div className={cl.card}>
    {
      image ? 
      <div className={cl.image}
        style={{backgroundImage: `url(/apps/BnCafe/RecipeImg/${image})`}}
      />:null
    }
    <div className={cl.words}>
      {words}
    </div>
    </div>
  </>)
}