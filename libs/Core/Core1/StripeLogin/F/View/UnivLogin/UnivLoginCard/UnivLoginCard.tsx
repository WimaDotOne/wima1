import { useEffect, useState } from "react";
import { Get2, useShield } from "../../../../../fCore1";
import { UnivEmailLogin } from "./UnivEmailLogin/UnivEmailLogin";

interface IUnivLoginCardProp {
}
export function UnivLoginCard({
}: IUnivLoginCardProp) {
  
  const [univLoginCardTurn, setUnivLoginCardTurn] = useState<UnivLoginCardTurn>(UnivLoginCardTurn.UnivEmailLogin)
  const shield = useShield()

  function afterLogin() {
    setUnivLoginCardTurn(UnivLoginCardTurn.UnivLogout)
  }

  function afterLogout() {
    setUnivLoginCardTurn(UnivLoginCardTurn.UnivEmailLogin)
  }

  async function IsUnivLoggedIn() {
    await Get2(shield, "/login/IsUnivLoggedIn", (res)=>{
      if(res.isUnivLoggedIn) {
        setUnivLoginCardTurn(UnivLoginCardTurn.UnivLogout)
      } else {
        setUnivLoginCardTurn(UnivLoginCardTurn.UnivEmailLogin)
      }
    })
  }

  useEffect(()=>{
  }, [])

  switch(univLoginCardTurn) {
    case UnivLoginCardTurn.UnivEmailLogin:
      return (<UnivEmailLogin afterLogin={()=>{}}/>)
    default: return null
  }
}

enum UnivLoginCardTurn {
  UnivEmailLogin = 1,
  UnivLogout
}