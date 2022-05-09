import { useState } from "react";
import { NextPageSideBar } from "../../../../../libs/Pop/Pop1/Pagination/NextPageSideBar";
import { MovicControlBar } from "./H/MovicControlBar/MovicControlBar";
import cl from "./MovicPlayer.module.scss"

interface IMovicPlayerProp {
  onStop: ()=>void
}

export function MovicPlayer({
  onStop
}: IMovicPlayerProp) {

  const [page, setPage] = useState<number|string>(1)


  return(<>
    <div className={cl.movicPlayer}>
      <div className={cl.screen}>

      </div>
      <NextPageSideBar page={page} setPage={setPage} totalPage={9} 
        pedalColor="#444" arrowColor="#333"/>
      <NextPageSideBar page={page} setPage={setPage} prev
        pedalColor="#444" arrowColor="#333"/>
      <MovicControlBar page={page} setPage={setPage} totalPage={9}
        onStop={onStop}
      />
    </div>
  </>)
}