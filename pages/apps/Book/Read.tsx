import { useRouter } from 'next/router'
import { BookPlayer } from '../../../apps/Book/F/BookApp/BookPlayer/BookPlayer'

export default function BookRead() {

  const router = useRouter()
  const bookId = router.query.bookId as string

  function closeBook() {
    router.push("/")
  }
  return (<>
  <BookPlayer bookId={bookId} onCloseBook={closeBook} />
  </>)
}
