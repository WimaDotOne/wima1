import { useState } from "react";
import { MovicControlBar } from "./H/MovicControlBar/MovicControlBar";
import cl from "./MovicPlayer.module.scss"

interface IMovicPlayerProp {

}

export function MovicPlayer({

}: IMovicPlayerProp) {

  const [page, setPage] = useState<number|string>("")
  return(<>
    <div className={cl.movicPlayer}>
      <MovicControlBar page={page} setPage={setPage} totalPage={9}/>
    </div>
  </>)
}