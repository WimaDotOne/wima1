import { useWimaEnv } from "../../../../../../../../apps/Wima/fWima"
import { IUnit } from "../../../../../Model/IUnit"
import cl from "./ViewPublish.module.scss"

interface IViewPublishProp {
  unit: IUnit
  isUnitPublic: boolean
}
export function ViewPublish({
  unit,
  isUnitPublic
}: IViewPublishProp) {

  const wimaEnv = useWimaEnv()

  let text = "The unit is not published."
  let href = ""
  if(isUnitPublic) {
    text = "The unit is public."
    href = `${wimaEnv?.domain}/apps/Lingo/Play?unitId=${unit._id}`
  }

  return(<>
    <div className={cl.viewPublish}>
      {text}
      {
        href ?
        <div className={cl.aDiv}>
        <a target="_blank" href={href}>
        {href}
        </a>
        </div>: null
      }
    </div>
  </>)
}