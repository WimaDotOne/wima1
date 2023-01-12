import { CoffeeTopBar } from "../../../../../../libs/Core/Core2/CoffeeWindow/F/H/CoffeeTopBar/CoffeeTopBar"
import cl from "./Dashboard.module.scss"

interface IDashboardProp {

}

export function Dashboard({

}: IDashboardProp) {
  return(<>
  <CoffeeTopBar homeIconUrl="/apps/WimaHome/AppIcons/thanky.png"
    onClickHamburger={()=>{}}
    photoUrl="/apps/WimaHome/AppIcons/bncafe.png"
  />
  </>)
}

