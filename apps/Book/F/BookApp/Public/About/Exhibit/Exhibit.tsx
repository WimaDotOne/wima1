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
    },
    {
      id: "HarryPorter1",
      title: "Harry Porter and the Sorcerer's Stone",
      coverImgUrl: bookCoverFolder+"/HarryPorter1.jpg"
    },
    {
      id: "Bunnicula",
      title: "Bunnicula",
      coverImgUrl: bookCoverFolder+"/Bunnicula.jpg"
    },
    {
      id: "TheHateUGive",
      title: "The Hate U Give",
      coverImgUrl: bookCoverFolder+"/TheHateUGive.jpg"
    }
  ])
}