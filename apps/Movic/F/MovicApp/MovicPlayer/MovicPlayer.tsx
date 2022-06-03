import Head from "next/head";
import { useEffect, useState } from "react";
import { Get2, useShield } from "../../../../../libs/Core/Core1/fCore1";
import { Div } from "../../../../../libs/Core/Core2/fCore2";
import { NextPageSideBar } from "../../../../../libs/Pop/Pop1/Pagination/NextPageSideBar";
import { IScene } from "../../Model/IMoment";
import { MovicControlBar } from "./H/MovicControlBar/MovicControlBar";
import { Scene } from "./H/Scene/Scene";
import cl from "./MovicPlayer.module.scss"

interface IMovicPlayer2Prop {
  movicId?: string
  projectId?: string
  onStop: ()=>void
}

export function MovicPlayer2({
  movicId,
  projectId,
  onStop
}: IMovicPlayer2Prop) {

  const [scenes, setScenes] = useState<Array<IScene>>([])
  const [scenesLoaded, setScenesLoaded] = useState<boolean>(false)
  const [movicTitle, setMovicTitle] = useState<string>("")
  const shield = useShield()

  async function loadScenes() {
    if(scenesLoaded) return
    let url = ""
    if(projectId) {
      url = `/movic/LoadMovicPreview?projectId=${projectId}`
    }
    else if(movicId) {
      url = `/movic/LoadMovic?movicId=${movicId}`
    }
    if(!url) return
    await Get2(shield, url,
      (res)=>{
        setScenesLoaded(true)
        setScenes(res.scenes)
        if(res.movicTitle) {
          setMovicTitle(res.movicTitle)
        }
      } 
    )
  }

  useEffect(()=>{
    loadScenes()
  })
  return(<>
    <MovicPlayer movicTitle={movicTitle}
      scenes={scenes} onStop={onStop}/>
  </>)

}

interface IMovicPlayerProp {
  movicTitle?: string,
  scenes: Array<IScene>,
  onStop: ()=>void
}

export function MovicPlayer({
  movicTitle,
  scenes,
  onStop
}: IMovicPlayerProp) {

  const [page, setPage] = useState<number|string>(1)

  const totalPage = scenes.length || 1

  return(<>
    {
      movicTitle?
      <Head>
        <title>{movicTitle}</title>
      </Head>: null
    }
  
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