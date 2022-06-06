import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../../../libs/Core/Core1/fCore1"
import { Scrollable2 } from "../../../../../../libs/Core/Core2/Controls/Scrollable/Scrollable2"
import { AppleWindowBottomBarFill } from "../../../../../../libs/Core/Core2/fCore2"
import { Table } from "../../../../../../libs/Pop/Pop1/fPop1"
import { TableModel } from "../../../../../../libs/Pop/Pop1/Table/Model/TableModel"
import { AppleWindowBottomBar } from "../../../../../H/AppleWindowBottomBar"
import { useWimaUser } from "../../../../../Wima/fWima"
import { MovicColor } from "../../../CSS/MovicColor"
import { IMovic } from "../../../Model/IMovic"
import { MovicPlayer2 } from "../../MovicPlayer/MovicPlayer"
import { MovicWindow } from "../../MovicWindow/MovicWindow"
import { MovicBar } from "./H/MovicBar/MovicBar"
import cl from "./MyMovics.module.scss"

export function MyMovics() {

  const [movicId, setMovicId] = useState<string>("")
  const [movics, setMovics] = useState<Array<IMovic>>([])
  const [movicTable, setMovicTable] = useState<TableModel>()
  const [isTableLoaded, setIsTableLoaded] = useState<boolean>(false)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const shield = useShield()
  const user = useWimaUser()

  async function loadMyMovics() {
    if(isTableLoaded) return
    if(!user?.isLoggedIn) return
    await Get2(shield,"/movic/LoadMyMovics",
      (res)=>{
        setIsTableLoaded(true)
        const movics = res.movics
        if(movics && movics.length) {
          setMovics(movics)
          const movic0 = movics[0]
          const table = MakeMovicTable(res.movics)
          setMovicTable(table)
          setMovicId(movic0.id)
        }
      }
    )
  }

  useEffect(()=>{
    loadMyMovics()
  })

  function play() {
    setIsPlaying(true)
  }

  function stop() {
    setIsPlaying(false)
  }

  const topNode = <MovicBar movic={GetMovic(movicId, movics)} onPlay={play}/>
  const bottomNode = <AppleWindowBottomBarFill />

  return(<>
  {
    isPlaying ? 
    <MovicPlayer2 movicId={movicId} onStop={stop}/>:
    <>
      <MovicWindow>
        <div className={cl.scrollableWrap}>
          <Scrollable2 topNode={topNode} bottomNode={bottomNode}>
            <Table table={movicTable} rowId={movicId} setRowId={setMovicId}/>
          </Scrollable2>
        </div>
      </MovicWindow>
      <AppleWindowBottomBar>
      {}
      </AppleWindowBottomBar>
    </>
  }
  </>)
}

function MakeMovicTable(movics: Array<IMovic>) {
  const schema = [
    {title: "Title", width: 200}
  ]
  const data = []
  for(const movic of movics) {
    data.push({
      id: movic.id,
      attributes: [
        {type: "text", value: movic.title}
      ]
    })
  }

  const table = new TableModel(schema, data)
  table.narrowScreenWidth = 500
  table.selectedRowColor = MovicColor.themeRed
  return table
}

function GetMovic(movicId: string, movics: Array<IMovic>) {
  for(const movic of movics) {
    if(movic.id === movicId) {
      return movic
    }
  }
  return undefined
}