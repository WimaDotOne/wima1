import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../../../libs/Core/Core1/fCore1"
import { IScene } from "../../../Model/IMoment"
import { MovicPlayer } from "../../MovicPlayer/MovicPlayer"
import cl from "./ExhibitMovic.module.scss"

interface IExhibitMovicProp {

}
export function ExhibitMovic({

}: IExhibitMovicProp) {

  const [scenes, setScenes] = useState<Array<IScene>>([])
  const [loaded, setLoaded] = useState<boolean>(false)

  const shield = useShield()
  const router = useRouter()
  const movicId = router.query.movicId
  const movicTitle = (router.query.movicTitle || "") as string


  async function loadExhibitMovic() {
    if(loaded) return
    await Get2(shield, `/movic/LoadExhibitMovic?movicId=${movicId}`,
      (res)=>{
        setLoaded(true)
        setScenes(res.scenes)
      }
    )
  }
  useEffect(()=>{
    loadExhibitMovic()
  })

  function stop() {
    router.back()
  }
  

  return(<>
    <MovicPlayer movicTitle={movicTitle} onStop={stop}
       scenes={scenes}/>
  </>)
}