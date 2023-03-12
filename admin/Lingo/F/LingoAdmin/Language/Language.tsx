import { useRouter } from "next/router"

export function Language() {

  const router = useRouter()

  const query = router.query
  const language = query.language as string

  return(<>
  {
    language
  }
  </>)
}