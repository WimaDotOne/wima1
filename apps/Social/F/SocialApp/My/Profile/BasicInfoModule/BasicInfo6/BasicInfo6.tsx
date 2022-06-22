import { useEffect, useState } from "react"
import { Post2, useShield } from "../../../../../../../../libs/Core/Core1/fCore1"
import { ReadEdit } from "../../../../../../../../libs/Pop/Pop1/fPop1"
import { SocialColor } from "../../../../../CSS/SocialColor"
import { ISocialProfile } from "../../../../../Model/ISocialProfile"
import { BasicInfo6Edit } from "./BasicInfo6Edit/BasicInfo6Edit"
import { BasicInfo6Read } from "./BasicInfo6Read/BasicInfo6Read"

interface IBasicInfo6Prop {
  profile: ISocialProfile
  refresh: ()=>void
}

export function BasicInfo6({
  profile,
  refresh
}: IBasicInfo6Prop) {

  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [experiences2, setExperiences2] = useState<string>()
  const shield = useShield()

  useEffect(()=>{
    setExperiences2(profile.experiences2)
  }, [profile])

  async function saveProfile6() {
    await Post2(shield, "/social/SaveProfile6",
    {
      experiences2
    }, (res)=>{
      setIsEdit(false)
      refresh()
    })
  }

  function onCancel() {
    setIsEdit(false)
    refresh()
  }

  return(<>
  <ReadEdit title="Experiences of being helped"
    description="List experiences of receiving help from other people. For example tutoring, moving, support. List one experience in one line without newline breaks."
    isEdit={isEdit}
    setIsEdit={setIsEdit}
    onCancel={onCancel}
    onSave={saveProfile6}
    color={SocialColor.themeBlue}
  >
  {
    isEdit ? 
    <BasicInfo6Edit 
      experiences2={experiences2}
      setExperiences2={setExperiences2}
    />:
    <BasicInfo6Read 
      experiences2={experiences2}
    />
  }
  </ReadEdit>
  </>)
}