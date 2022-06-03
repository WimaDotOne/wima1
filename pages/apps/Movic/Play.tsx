import { useRouter } from 'next/router'
import { MovicPlayer2 } from '../../../apps/Movic/F/MovicApp/MovicPlayer/MovicPlayer'

export default function MovicPlay() {

  const router = useRouter()
  const movicId = router.query.movicId as string

  function stop() {
    router.push("/")
  }
  return (<>
    <MovicPlayer2 movicId={movicId} onStop={stop}/>
  </>)
}
