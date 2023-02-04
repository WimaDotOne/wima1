import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { HeroHeader } from "../../../../../Lib/HeroHeader/HeroHeader"
import cl from "./Place.module.scss"
import { IThankyJob } from "../../../Model/IThankyJob"
import { EmployeeCard } from "./EmployeeCard/EmployeeCard"
import { Get2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"

interface IPlaceProp {

}

export function Place({

} : IPlaceProp) {

  const [jobs, setJobs] = useState<Array<IThankyJob>>([])
  const [placeName, setPlaceName] = useState<string>("")
  const router = useRouter()
  const shield = useShield()

  async function loadPlaceJobs(placeId?: string) {
    if(!placeId) return
    Get2(shield, `/thanky/LoadPlaceJobs?placeId=${placeId}`, (res)=>{
      setJobs(res.jobs)
    })
  }

  function goEmployee(jobId?: string) {
    if(!jobId) return
    router.push(`/apps/Thanky/Employee?jobId=${jobId}`)
  }

  useEffect(()=>{
    if(!router.isReady) return
  
    const placeId = (router.query.placeId || "") as string
    const placeName2 = (router.query.placeName || "") as string

    setPlaceName(placeName2)
    loadPlaceJobs(placeId)
  }, [router.isReady])

  return(<>
  <div className={cl.placeName}>
    <HeroHeader bigWords={placeName} h2 />
  </div>
  {
    !jobs || jobs.length < 1 ?
    <div className={cl.noEmployee}>
      No employees at this place have joined the site yet.
    </div>:
    <div className={cl.jobs}>
    {
      jobs.map((job, i)=>
      <div key={i} className={cl.employeeCardSpace}>
        <EmployeeCard key={i} job={job}
          onClick={()=>{ goEmployee(job._id)}}
        />
      </div>
      )
    }
    </div>

  }
  </>)
}