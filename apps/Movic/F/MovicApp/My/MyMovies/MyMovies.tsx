import { Table } from "../../../../../../libs/Pop/Pop1/fPop1"
import { TableModel } from "../../../../../../libs/Pop/Pop1/Table/Model/TableModel"
import { MovicWindow } from "../../H/MovicWindow/MovicWindow"
import cl from "./MyMovies.module.scss"

export function MyMovies() {

  const movieTable: TableModel = {
    schema: [
      {title: "Title", width: 100}
    ],
    data: [
      { 
        attributes : [
          {type: "text", value: "Scott Pilgrilm vs the World"}
        ]
      }, 
      {
        attributes : [
          {type: "text", value: "Knives Out"}
        ]
      }
    ]
  }
  return(<>
    <MovicWindow>
      <Table table={movieTable}/>
    </MovicWindow>
  </>)
}