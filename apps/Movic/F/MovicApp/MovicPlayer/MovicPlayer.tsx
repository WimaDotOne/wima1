import { useEffect, useState } from "react";
import { Get2, useShield } from "../../../../../libs/Core/Core1/fCore1";
import { Div } from "../../../../../libs/Core/Core2/fCore2";
import { NextPageSideBar } from "../../../../../libs/Pop/Pop1/Pagination/NextPageSideBar";
import { IScene } from "../../Model/IMoment";
import { IProject } from "../../Model/IProject";
import { MovicControlBar } from "./H/MovicControlBar/MovicControlBar";
import { Scene } from "./H/Scene/Scene";
import cl from "./MovicPlayer.module.scss"

interface IMovicPlayerProp {
  project: IProject
  onStop: ()=>void
}

export function MovicPlayer({
  project,
  onStop
}: IMovicPlayerProp) {

  const [page, setPage] = useState<number|string>(1)
  const [scenes, setScenes] = useState<Array<IScene>>([])
  const [scenesLoaded, setScenesLoaded] = useState<boolean>(false)
  const shield = useShield()

  async function loadScenes() {
    if(scenesLoaded) return
    await Get2(shield, `/movic/LoadScenes?projectId=${project.id}`,
      (res)=>{
        setScenesLoaded(true)
        setScenes(res.scenes)
      } 
    )
  }

  useEffect(()=>{
    loadScenes()
  })

  const totalPage = scenes.length || 1
  return(<>
    <div className={cl.movicPlayer}>
      <div className={cl.screen}>
        <Div height={20} />
        {
          scenes && scenes.length ?
            <Scene scene={scenes[(+page-1)]}/>: null
        }
        <Div height={40} />
      </div>
      <NextPageSideBar page={page} setPage={setPage} totalPage={totalPage} 
        pedalColor="#444" arrowColor="#333"/>
      <NextPageSideBar page={page} setPage={setPage} prev
        pedalColor="#444" arrowColor="#333"/>
      <MovicControlBar page={page} setPage={setPage} totalPage={totalPage}
        onStop={onStop}
      />
    </div>
  </>)
}