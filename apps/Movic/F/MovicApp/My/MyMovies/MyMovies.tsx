import { useState } from "react"
import { Scrollable2 } from "../../../../../../libs/Core/Core2/Controls/Scrollable/Scrollable2"
import { AppleWindowBottomBarFill } from "../../../../../../libs/Core/Core2/fCore2"
import { Table } from "../../../../../../libs/Pop/Pop1/fPop1"
import { TableModel } from "../../../../../../libs/Pop/Pop1/Table/Model/TableModel"
import { MovicColor } from "../../../CSS/MovicColor"
import { MovicWindow } from "../../H/MovicWindow/MovicWindow"
import { MovicWindowBottomBar } from "../../H/MovicWindow/MovicWindowBottomBar"
import { MovieBar } from "./H/MovieBar/MovieBar"
import cl from "./MyMovies.module.scss"

export function MyMovies() {

  const [movieId, setMovieId] = useState<string>("a")
  const movieTable = fakeTable()

  const topNode = <MovieBar />
  const bottomNode = <AppleWindowBottomBarFill />

  return(<>
    <MovicWindow>
      <div className={cl.scrollableWrap}>
        <Scrollable2 topNode={topNode} bottomNode={bottomNode}>
          <Table table={movieTable} rowId={movieId} setRowId={setMovieId}/>
        </Scrollable2>
      </div>
    </MovicWindow>
    <MovicWindowBottomBar>
      {}
    </MovicWindowBottomBar>
  </>)
}

function fakeTable() {
  const schema = [
    {title: "Title", width: 150},
    {title: "Director", width: 100 }
  ]
  const data = [
    { 
      id: "a",
      attributes : [
        {type: "text", value: "Scott Pilgrilm vs the World"},
        {type: "text", value: "James Noble"}
      ]
    }, 
    {
      id: "b",
      attributes : [
        {type: "text", value: "Knives Out"},
        {type: "text", value: "Peter Savings"}
      ]
    }
  ]
  for(let i=0; i<100; i++) {
    data.push ({
      id: "c"+i,
      attributes: [
        {type: "text", value: "Movie "+i},
        {type: "text", value: "Director "+i}
      ]
    })
  }
  const table = new TableModel(schema, data)
  table.narrowScreenWidth = 700
  table.selectedRowColor = MovicColor.red
  return table
}