import { IMovic } from "../../../Model/IMovic"
import { Dvd } from "./Dvd/Dvd"
import cl from "./DvdList.module.scss"

interface IDvdListProp {
  movics: Array<IMovic>
  onClick: (movicId: string)=>void
}

export function DvdList({
  movics,
  onClick
}: IDvdListProp) {

  movics = movics || []
  return(<>
  <div className={cl.dvdList}>
  {
    movics.map((movic, i)=>
    <div className={cl.dvdSpace} key={movic.id}>
      <Dvd imageUrl={movic.imageUrl} title={movic.title}
        onClick={()=>{onClick(movic.id)}}/>
    </div>
    )
  }
  </div>
  </>)
}