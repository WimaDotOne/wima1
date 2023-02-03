import { useRouter } from "next/router"
import { useEffect } from "react"
import cl from "./Place.module.scss"

interface IPlaceProp {

}

export function Place({

} : IPlaceProp) {

  const router = useRouter()
  const {placeId, placeName} = router.query

  async function loadPlaceJobs() {
    if(!placeId) return
    
  }

  useEffect(()=>{
    loadPlaceJobs()
  }, [])

  return(<>
  { placeId } <br/>
  { placeName }
  </>)
}