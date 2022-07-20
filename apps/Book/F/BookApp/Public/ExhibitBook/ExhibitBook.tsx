import { useRouter } from "next/router"
import { BookPlayer } from "../../BookPlayer/BookPlayer"

export function ExhibitBook() {
  
  const router = useRouter()
  const exhibitId = (router.query.exhibitId || "") as string

  function closeBook() {
    router.back()
  }

  return(<>
    <BookPlayer exhibitId={exhibitId} onCloseBook={closeBook}/>
  </>)
}