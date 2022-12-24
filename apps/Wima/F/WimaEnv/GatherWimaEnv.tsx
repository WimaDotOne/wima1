import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../libs/Core/Core1/fCore1"
import { useWimaEnv } from "./WimaEnvContext"

export function GatherWimaEnv() {

  const wimaEnv = useWimaEnv()
  const shield = useShield()
  const [loaded, setLoaded] = useState<boolean>(false)

  async function LoadWimaEnv() {
    if(loaded) return
    //Only need once for the whole website, and domain is always needed to be set in .env.
    if(wimaEnv?.domain) return
    await Get2(shield,"/wima/LoadWimaEnv", (res)=>{

      setLoaded(true)
      wimaEnv?.setDomain(res.domain)
      wimaEnv?.setMovicScriptFileMaxLength(res.movicScriptFileMaxLength)
      wimaEnv?.setTextMaxPerChapter(res.textMaxPerChapter)
      wimaEnv?.setQuizQuestionsMaxLength(res.quizQuestionsMaxLength)
    })
  }
  useEffect(()=>{
    LoadWimaEnv()
  })
  return(<>
    <div></div>
  </>)
}