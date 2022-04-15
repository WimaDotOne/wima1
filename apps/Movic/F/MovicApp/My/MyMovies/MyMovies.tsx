import { Table } from "../../../../../../libs/Pop/Pop1/fPop1"
import { TableModel } from "../../../../../../libs/Pop/Pop1/Table/Model/TableModel"
import { MovicWindow } from "../../H/MovicWindow/MovicWindow"
import { MovieBar } from "./H/MovieBar/MovieBar"
import cl from "./MyMovies.module.scss"

export function MyMovies() {

  const movieTable = fakeTable()
  return(<>
    <MovicWindow>
      <MovieBar />
      <Table table={movieTable}/>
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
      attributes : [
        {type: "text", value: "Scott Pilgrilm vs the World"},
        {type: "text", value: "James Noble"}
      ]
    }, 
    {
      attributes : [
        {type: "text", value: "Knives Out"},
        {type: "text", value: "Peter Savings"}
      ]
    }
  ]
  const table = new TableModel(schema, data)
  table.narrowScreenWidth = 300
  return table
}