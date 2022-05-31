import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../../../libs/Core/Core1/fCore1"
import { Scrollable2 } from "../../../../../../libs/Core/Core2/Controls/Scrollable/Scrollable2"
import { AppleWindowBottomBarFill } from "../../../../../../libs/Core/Core2/fCore2"
import { Table } from "../../../../../../libs/Pop/Pop1/fPop1"
import { TableModel } from "../../../../../../libs/Pop/Pop1/Table/Model/TableModel"
import { MovicColor } from "../../../CSS/MovicColor"
import { IMovic } from "../../../Model/IMovic"
import { MovicWindow } from "../../MovicWindow/MovicWindow"
import { MovicWindowBottomBar } from "../../MovicWindow/MovicWindowBottomBar"
import { MovicBar } from "./H/MovicBar/MovicBar"
import cl from "./MyMovics.module.scss"

export function MyMovics() {

  const [movicId, setMovicId] = useState<string>("a")
  const [movicTable, setMovicTable] = useState<TableModel>()
  const [isTableLoaded, setIsTableLoaded] = useState<boolean>(false)

  const shield = useShield()

  async function loadMyMovics() {
    if(isTableLoaded) return

    await Get2(shield,"/movic/LoadMyMovics",
      (res)=>{
        setIsTableLoaded(true)
        console.log(res.movics)
        const table = MakeMovicTable(res.movics)
        setMovicTable(table)
      }
    )
  }

  useEffect(()=>{
    loadMyMovics()
  })

  const topNode = <MovicBar />
  const bottomNode = <AppleWindowBottomBarFill />

  return(<>
    <MovicWindow>
      <div className={cl.scrollableWrap}>
        <Scrollable2 topNode={topNode} bottomNode={bottomNode}>
          <Table table={movicTable} rowId={movicId} setRowId={setMovicId}/>
        </Scrollable2>
      </div>
    </MovicWindow>
    <MovicWindowBottomBar>
    {}
    </MovicWindowBottomBar>
  </>)
}

function MakeMovicTable(movics: Array<IMovic>) {
  const schema = [
    {title: "Title", width: 150}
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