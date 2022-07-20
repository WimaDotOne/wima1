import { useRouter } from "next/router"
import { BookList } from "../../../H/BookList/BookList"

export function Exhibit() {

  const router = useRouter()
  const books = GetBooks()

  function onClickBook(exhibitId: string) {
    for(const book of books) {
      if(book.id === exhibitId) {
        break
      }
    }
    router.push(`/apps/Book/AppTurn/ExhibitBook?exhibitId=${exhibitId}`)
  }

  return(<>
    <BookList books={books} onClick={onClickBook}/>
  </>)
}

function GetBooks() {

  const bookCoverFolder = "/apps/Book/Exhibit/BookCovers"
  return([
    {
      id: "ToKillAMockingbird",
      title: "To Kill A Mockingbird",
      coverImgUrl: bookCoverFolder+"/ToKillAMockingbird.jpg"
    },
    {
      id: "OneHundredYearsOfSolitude",
      title: "One Hundred Years of Solitude",
      coverImgUrl: bookCoverFolder+"/OneHundredYearsOfSolitude.jpg"
    }
  ])
}