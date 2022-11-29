import { Div } from "../../../../../../../libs/Core/Core2/fCore2"
import { DrinkOption } from "./DrinkOption/DrinkOption"
import { Panel } from "./Panel/Panel"
import cl from "./Register.module.scss"

interface IRegisterProp {
  decaf?: boolean
  setDecaf: (decaf: boolean) =>void
  vanilla?: boolean
  setVanilla: (value: boolean) =>void
  classic?: boolean
  setClassic: (value: boolean) =>void
  caramel?: boolean
  setCaramel: (value: boolean) =>void
  sugarFreeVanilla?: boolean
  setSugarFreeVanilla: (value: boolean) =>void

  twoPercent?: boolean
  setTwoPercent: (value: boolean) =>void
  nonFat?: boolean
  setNonFat: (value: boolean) =>void
  whole?: boolean
  setWhole: (value: boolean) =>void
  coconut?: boolean
  setCoconut: (value: boolean) =>void
  almond?: boolean
  setAlmond: (value: boolean) =>void
  oat?: boolean
  setOat: (value: boolean) =>void
  soy?: boolean
  setSoy: (value: boolean) =>void

  whippedCream?: boolean
  setWhippedCream: (value: boolean) =>void
  lightIce?: boolean
  setLightIce: (value: boolean) =>void

  canLightIce?: boolean
  canDecaf?: boolean
}

export function Register({
  decaf, setDecaf,
  vanilla, setVanilla,
  classic, setClassic,
  caramel, setCaramel,
  sugarFreeVanilla, setSugarFreeVanilla,

  twoPercent, setTwoPercent,
  nonFat, setNonFat,
  whole, setWhole,
  coconut, setCoconut,
  almond, setAlmond,
  oat, setOat,
  soy, setSoy,

  whippedCream, setWhippedCream,
  lightIce, setLightIce,
  
  canLightIce,
  canDecaf
}: IRegisterProp) {

  function clearMilk() {
    setTwoPercent(false)
    setNonFat(false)
    setWhole(false)
    setCoconut(false)
    setAlmond(false)
    setOat(false)
    setSoy(false)
  }
  return(<>
  <div className={cl.register}>
  {
    canDecaf ? <>
    <Panel>
      <DrinkOption prompt="Decaf"
        checked={!!decaf} 
        onChange={(checked: boolean)=>{setDecaf(checked)}}
      />
    </Panel>
    <Div height={15} />
    </>: null
  }
  <Panel>
    <DrinkOption prompt="Vanilla"
      checked={!!vanilla} 
      onChange={(checked: boolean)=>{setVanilla(checked)}}
    />
    <DrinkOption prompt="Classic"
      checked={!!classic} 
      onChange={(checked: boolean)=>{setClassic(checked)}}
    />
    <DrinkOption prompt="Caramel"
      checked={!!caramel} 
      onChange={(checked: boolean)=>{setCaramel(checked)}}
    />
    <DrinkOption prompt="Sugar Free Vanilla"
      checked={!!sugarFreeVanilla} 
      onChange={(checked: boolean)=>{setSugarFreeVanilla(checked)}}
    />
  </Panel>
  <Div height={15} />

  <Panel>
    <DrinkOption prompt="2%"
      checked={!!twoPercent} 
      onChange={(checked: boolean)=>{
        clearMilk()
        setTwoPercent(checked)
      }}
    />
    <DrinkOption prompt="Nonfat"
      checked={!!nonFat} 
      onChange={(checked: boolean)=>{
        clearMilk()
        setNonFat(checked)
      }}
    />
    <DrinkOption prompt="Whole"
      checked={!!whole} 
      onChange={(checked: boolean)=>{
        clearMilk()
        setWhole(checked)
      }}
    />
    <DrinkOption prompt="Coconut"
      checked={!!coconut} 
      onChange={(checked: boolean)=>{
        clearMilk()
        setCoconut(checked)
      }}
    />
    <DrinkOption prompt="Almond"
      checked={!!almond} 
      onChange={(checked: boolean)=>{
        clearMilk()
        setAlmond(checked)
      }}
    />
    <DrinkOption prompt="Oat"
      checked={!!oat} 
      onChange={(checked: boolean)=>{
        clearMilk()
        setOat(checked)
      }}
    />
    <DrinkOption prompt="Soy"
      checked={!!soy} 
      onChange={(checked: boolean)=>{
        clearMilk()
        setSoy(checked)
      }}
    />
  </Panel>
  <Div height={15} />

  <Panel>
    <DrinkOption prompt="Whipped Cream"
      checked={!!whippedCream} 
      onChange={(checked: boolean)=>{setWhippedCream(checked)}}
    />
    {
      canLightIce?
      <DrinkOption prompt="Light Ice"
        checked={!!lightIce} 
        onChange={(checked: boolean)=>{setLightIce(checked)}}
      />: null
    }
  </Panel>
  </div>
  </>)
}