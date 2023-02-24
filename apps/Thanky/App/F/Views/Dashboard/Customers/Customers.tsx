import { useEffect, useState } from "react"
import { Get2, Post2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { CheckField1 } from "../../../../../../../libs/Core/Core1/Fields/CheckField/CheckField1"
import { TextDate2 } from "../../../../../../../libs/Core/Core1/Util/F/Time/Date"
import { CoffeeWindowViewCard } from "../../../../../../../libs/Core/Core2/CoffeeWindow/fCoffeeWindow"
import { AppleIconButton, Div } from "../../../../../../../libs/Core/Core2/fCore2"
import { IThankyTipIntent } from "../../../Model/IThankyTipIntent"
import { ThankyMenuTurn, ThankyWindow } from "../../ThankyWindow/ThankyWindow"
import cl from "./Customers.module.scss"

interface ICustomersProp {

}

export function Customers({

}: ICustomersProp) {

  const [tipIntents, setTipIntents] = useState<Array<IThankyTipIntent>>([])
  const [selectedIntents, setSelectedIntents] = useState<Array<string>>([])
  const shield = useShield()

  async function loadTipIntents() {
    await Get2(shield, "/thanky/LoadTipIntents", (res)=>{
      if(res.tipIntents && res.tipIntents.length) {
        setTipIntents(res.tipIntents)
      } else {
        //make sure to trigger view refresh
        setTipIntents([])
      }
    })
  }

  async function deleteMessages() {
    if(!selectedIntents || selectedIntents.length < 1) return
    if(!window.confirm(`Are you sure to delete ${selectedIntents.length} message(s)?`)) return

    await Post2(shield, "/thanky/DeleteTipIntents",{
      tipIntentIds: selectedIntents
    }, (res)=>{
      loadTipIntents()
    })
  }

  function onCheckFieldChange(checked: boolean, tipIntentId?: string) {
    if(!tipIntentId) return
    const index = selectedIntents.indexOf(tipIntentId)
    const newSelectedIntents = [...selectedIntents]
    if(checked) {
      if(index < 0) { //if cannot find one
        newSelectedIntents.push(tipIntentId)
      }
    } else {
      if(index > -1) { //if find one
        newSelectedIntents.splice(index, 1)
      }
    }
    setSelectedIntents(newSelectedIntents)
  }

  useEffect(()=>{
    loadTipIntents()
  }, [])

  return(<>
  <ThankyWindow selectItemId={ThankyMenuTurn.Customers}>
    <CoffeeWindowViewCard shiftUp>
    <div className={cl.title}>
      Most recent messages from customers intending to tip
    </div>
    <Div height={25} />
    <div className={cl.buttons}>
      <AppleIconButton svgName="trashbin" onClick={deleteMessages}
        disabled={selectedIntents.length < 1}
      />
    </div>
    <Div height={25} />
    <div className={cl.messages}>
    {
      tipIntents.length < 1 ?
      <div className={cl.noMessage}>No customers have left a message yet.</div>:
      tipIntents.map((tipIntent, i)=>
        <div className={cl.card} key={i}>
          <div className={cl.cardHeader}>
            <CheckField1 checked={ !!tipIntent._id && selectedIntents.includes(tipIntent._id)} 
              onChange={ (checked) => { onCheckFieldChange(checked, tipIntent._id) 
              }
            }/>
            <div className={cl.customerName}>
              {tipIntent.customerName || "Someone"} :
            </div>
            <div className={cl.date}>
              {TextDate2(tipIntent.createdUTC)}
            </div>
          </div>
          <div className={cl.customerComment}>
            {tipIntent.customerComment}
          </div>
        </div>
      )
    }
    </div>
    </CoffeeWindowViewCard>
  </ThankyWindow>
  </>)
}