import { useState } from "react"
import { Table } from "../../../../../../libs/Pop/Pop1/fPop1"
import { TableModel } from "../../../../../../libs/Pop/Pop1/Table/Model/TableModel"
import { MovicColor } from "../../../CSS/MovicColor"
import { MovicWindow } from "../../H/MovicWindow/MovicWindow"
import { MovieBar } from "./H/MovieBar/MovieBar"
import cl from "./MyMovies.module.scss"

export function MyMovies() {

  const [movieId, setMovieId] = useState<string>("a")
  const movieTable = fakeTable()
  return(<>
    <MovicWindow>
      <MovieBar />
      <Table table={movieTable} rowId={movieId} setRowId={setMovieId}/>
    </MovicWindow>
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