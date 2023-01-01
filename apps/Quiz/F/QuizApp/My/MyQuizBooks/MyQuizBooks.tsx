import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../../../libs/Core/Core1/fCore1"
import { AppleWindowBottomBarFill, Scrollable2 } from "../../../../../../libs/Core/Core2/fCore2"
import { Table } from "../../../../../../libs/Pop/Pop1/fPop1"
import { TableModel } from "../../../../../../libs/Pop/Pop1/Table/Model/TableModel"
import { AppleWindowBottomBar } from "../../../../../H/AppleWindowBottomBar"
import { useWimaEnv, useWimaUser } from "../../../../../Wima/fWima"
import { QuizColor } from "../../../CSS/QuizColor"
import { IQuizBook } from "../../../Model/IQuizBook"
import { QuizWindow } from "../../QuizWindow/QuizWindow"
import { PlayBar } from "./H/PlayBar/PlayBar"
import cl from "./MyQuizBooks.module.scss"

interface IMyQuizBooksProp {

}

export function MyQuizBooks({

}: IMyQuizBooksProp) {

  const [books, setBooks] = useState<Array<IQuizBook>>([])
  const [bookId, setBookId] = useState<string>("")
  const [quizBookTable, setQuizBookTable] = useState<TableModel>()
  const [isTableLoaded, setIsTableLoaded] = useState<boolean>(false)

  const shield = useShield()
  const user = useWimaUser()
  const wimaEnv = useWimaEnv()

  async function loadMyQuizBooks() {
    if(isTableLoaded) return
    if(!user?.isLoggedIn) return
    await Get2(shield,"/quiz/LoadMyPublishedQuizBooks",
      (res)=>{
        setIsTableLoaded(true)
        const books2 = res.books
        if(books2 && books2.length) {
          setBooks(books2)
          const book0 = books2[0]
          const table = MakeQuizBookTable(res.books)
          setQuizBookTable(table)
          setBookId(book0._id)
        }
      }
    )
  }

  function play() {
    if(!bookId) return
    window.open(`${wimaEnv?.domain}/apps/Quiz/BookPlay/?bookId=${bookId}`)
  }

  useEffect(()=>{
    loadMyQuizBooks()
  })
  const topNode = <PlayBar book={GetQuizBook(bookId, books)} onPlay={play}/>
  const bottomNode = <AppleWindowBottomBarFill />
  
  return(<>
  <QuizWindow>
    <div className={cl.scrollableWrap}>
      <Scrollable2 topNode={topNode} bottomNode={bottomNode}>
        <Table table={quizBookTable} rowId={bookId} setRowId={setBookId}/>
      </Scrollable2> 
    </div>
  </QuizWindow>
  <AppleWindowBottomBar>
  {}
  </AppleWindowBottomBar>
  </>)
}

function MakeQuizBookTable(books: Array<IQuizBook>) {
  const schema = [
    {title: "Title", width: 250}
  ]
  const data = []
  for(const book of books) {
    data.push({
      id: book._id,
      attributes: [
        {type: "text", value: book.title}
      ]
    })
  }

  const table = new TableModel(schema, data)
  table.narrowScreenWidth = 500
  table.selectedRowColor = QuizColor.themeRed
  return table
}

function GetQuizBook(bookId: string, books: Array<IQuizBook>) {
  for(const book of books) {
    if(book._id === bookId) {
      return book
    }
  }
  return undefined
}