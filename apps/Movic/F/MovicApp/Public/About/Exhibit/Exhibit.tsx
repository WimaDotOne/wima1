import { useRouter } from "next/router"
import { DvdList } from "../../../H/DvdList/DvdList"
import cl from "./Exhibit.module.scss"

export function Exhibit() {

  const router = useRouter()
  const movics = GetMovics()

  function onClickDvd(movicId: string) {
    let movicTitle = ""
    for(const movic of movics) {
      if(movic.id === movicId) {
        movicTitle = movic.title
        break
      }
    }
    router.push(`/apps/Movic/AppTurn/ExhibitMovic?movicId=${movicId}&movicTitle=${movicTitle}`)
  }

  return(<>
    <DvdList movics={movics} onClick={onClickDvd}/>
  </>)
}

function GetMovics() {

  const dvdFolder = "/apps/Movic/Exhibit/Dvds"
  return([
    {
      id: "ScottPilgrimVsTheWorld",
      title: "Scott Pilgrim vs The World",
      imageUrl: dvdFolder+"/ScottPilgrimVsTheWorld.jpg"
    },
    {
      id: "TheArtOfGettingBy",
      title: "The Art of Getting By",
      imageUrl: dvdFolder+"/TheArtOfGettingBy.jpg"
    },
    {
      id: "KnivesOut",
      title: "Knives Out",
      imageUrl: dvdFolder+"/KnivesOut.jpg"
    },
    {
      id: "AdventureLand",
      title: "Adventureland",
      imageUrl: dvdFolder+"/AdventureLand.jpg"
    },
  ])
}