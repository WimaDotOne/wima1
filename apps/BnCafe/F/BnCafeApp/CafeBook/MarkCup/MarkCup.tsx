import { useEffect, useState } from "react"
import { IconButtons } from "../../../../../../libs/Core/Core2/AppleWindow/F/View/IconButtons/IconButtons"
import { AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv, Button1, Div } from "../../../../../../libs/Core/Core2/fCore2"
import { IDrink } from "../../../Model/Drink"
import { Cup } from "./Cup/Cup"
import cl from "./MarkCup.module.scss"
import { Register } from "./Register/Register"

interface IMarkCupProp {
  drink?: IDrink,
  goMenu: ()=>void
}

export function MarkCup({
  drink,
  goMenu
}: IMarkCupProp) {

  const [decaf, setDecaf] = useState<boolean>(false)
  const [vanilla, setVanilla] = useState<boolean>(false)
  const [classic, setClassic] = useState<boolean>(false)
  const [caramel, setCaramel] = useState<boolean>(false)
  const [sugarFreeVanilla, setSugarFreeVanilla] = useState<boolean>(false)

  const [twoPercent, setTwoPercent] = useState<boolean>(!!drink?.twoPercent)
  const [nonFat, setNonFat] = useState<boolean>(false)
  const [whole, setWhole] = useState<boolean>(!!drink?.whole)
  const [coconut, setCoconut] = useState<boolean>(false)
  const [almond, setAlmond] = useState<boolean>(!!drink?.almond)
  const [oat, setOat] = useState<boolean>(!!drink?.oat)
  const [soy, setSoy] = useState<boolean>(false)

  const [whippedCream, setWhippedCream] = useState<boolean>(!!drink?.whippedCream)
  const [lightIce, setLightIce] = useState<boolean>(false)

  useEffect(()=>{
    if(window) {
      window.scrollTo(0, 0)
    }
  })

  if(!drink) {
    return null
  }

  return (<>
    <div className={cl.drinkName}>{drink.name}</div>
    <div className={cl.markCupSpace}>
      <Cup drink={drink}
        decaf={decaf}
        syrup={MarkSyrup(vanilla, classic, caramel, sugarFreeVanilla)}
        milk={MarkMilk(drink, twoPercent, nonFat, whole, coconut, almond, oat, soy)}
        custom={MarkCustomer(lightIce)}
        crossableValue={MarkWhippedCream(drink, whippedCream)}
        cross={CrossWhippedCream(drink, whippedCream)}
      />
      <Register 
        decaf={decaf} setDecaf={setDecaf}
        vanilla={vanilla} setVanilla={setVanilla}
        classic={classic} setClassic={setClassic}
        caramel={caramel} setCaramel={setCaramel}
        sugarFreeVanilla={sugarFreeVanilla}
        setSugarFreeVanilla={setSugarFreeVanilla}

        twoPercent={twoPercent} setTwoPercent={setTwoPercent}
        nonFat={nonFat} setNonFat={setNonFat}
        whole={whole} setWhole={setWhole}
        coconut={coconut} setCoconut={setCoconut}
        almond={almond} setAlmond={setAlmond}
        oat={oat} setOat={setOat}
        soy={soy} setSoy={setSoy}

        whippedCream={whippedCream} setWhippedCream={setWhippedCream}
        lightIce={lightIce} setLightIce={setLightIce}

        canLightIce={drink.canLightIce}
        canDecaf={drink.canDecaf}
      />
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

function MarkSyrup(
  vanilla: boolean,
  classic: boolean,
  caramel: boolean,
  sugarFreeVanilla: boolean
) {

  const syrups = []
  if(vanilla) {syrups.push("V")}
  if(classic) {syrups.push("Cl")}
  if(caramel) {syrups.push("Cr")}
  if(sugarFreeVanilla) {syrups.push("SFV")}

  return syrups.join(", ")
}

function MarkMilk(
  drink: IDrink,
  twoPercent: boolean,
  nonFat: boolean,
  whole: boolean,
  coconut: boolean,
  almond: boolean,
  oat: boolean,
  soy: boolean,
) {
  if(twoPercent) {
    if(drink.twoPercent) return ""
    return "2%"
  }
  if(nonFat) return "N"
  if(whole) {
    if (drink.whole) return ""
    return "W"
  }
  if(coconut) return "C"
  if(almond){
    if(drink.almond) return ""
    return "A"
  } 
  if(oat) {
    if(drink.oat) return ""
    return "O"
  }
  if(soy) return "S"
  return ""
}

function MarkWhippedCream(drink: IDrink, whippedCream: boolean) {
  if(drink.whippedCream) {
    return "WC"
  }
  if(whippedCream) {
    return "WC"
  }
}

function CrossWhippedCream(drink: IDrink, whippedCream: boolean) {
  return drink.whippedCream && !whippedCream
}

function MarkCustomer(lightIce: boolean) {
  return lightIce ? "lt ice" : ""
}