import { useEffect, useState } from "react";
import { Get2, useShield } from "../../../../../fCore1";
import { UnivEmailLogin } from "./UnivEmailLogin/UnivEmailLogin";
import { UnivLogout } from "./UnivLogout/UnivLogout";

interface IUnivLoginCardProp {
  afterLogin?: ()=>void
  afterLogout?: ()=>void
}
export function UnivLoginCard({
  afterLogin,
  afterLogout
}: IUnivLoginCardProp) {
  
  const [univLoginCardTurn, setUnivLoginCardTurn] = useState<UnivLoginCardTurn>(UnivLoginCardTurn.UnivEmailLogin)
  const shield = useShield()

  function afterLogin2() {
    if(afterLogin) {
      afterLogin()
    }
    setUnivLoginCardTurn(UnivLoginCardTurn.UnivLogout)
  }

  function afterLogout2() {
    if(afterLogout) {
      afterLogout()
    }
    setUnivLoginCardTurn(UnivLoginCardTurn.UnivEmailLogin)
  }

  async function IsLoggedInUniv() {
    await Get2(shield, "/login/IsLoggedInUniv", (res)=>{
      if(res.isLoggedIn) {
        setUnivLoginCardTurn(UnivLoginCardTurn.UnivLogout)
      } else {
        setUnivLoginCardTurn(UnivLoginCardTurn.UnivEmailLogin)
      }
    })
  }

  useEffect(()=>{
    IsLoggedInUniv()
  }, [])

  switch(univLoginCardTurn) {
    case UnivLoginCardTurn.UnivEmailLogin:
      return (<UnivEmailLogin afterLogin={afterLogin2}/>)
    case UnivLoginCardTurn.UnivLogout:
      return (<UnivLogout afterLogout={afterLogout2}/>)
    default: return null
  }
}

enum UnivLoginCardTurn {
  UnivEmailLogin = 1,
  UnivLogout
}