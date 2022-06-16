import { useEffect, useState } from "react"
import { Post2, useShield } from "../../../../../../../../libs/Core/Core1/fCore1"
import { ReadEdit } from "../../../../../../../../libs/Pop/Pop1/fPop1"
import { SocialColor } from "../../../../../CSS/SocialColor"
import { ISocialProfile } from "../../../../../Model/ISocialProfile"
import { BasicInfo4Edit } from "./BasicInfo4Edit/BasicInfo4Edit"
import { BasicInfo4Read } from "./BasicInfo4Read/BasicInfo4Read"

interface IBasicInfo4Prop {
  profile: ISocialProfile
  refresh: ()=>void
}

export function BasicInfo4({
  profile,
  refresh
}: IBasicInfo4Prop) {

  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [experiences, setExperiences] = useState<string>("")
  const shield = useShield()

  useEffect(()=>{
    setExperiences(profile.experiences)
  }, [profile])

  async function saveProfile4() {
    await Post2(shield, "/social/SaveProfile4",
    {
      experiences
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
  <ReadEdit title="Experiences of Helping Others"
    description="List experiences of Volunteering, Tutoring, or Jobs that directly serve other people. Or anything really. List one experience in one line without newline breaks."
    isEdit={isEdit}
    setIsEdit={setIsEdit}
    onCancel={onCancel}
    onSave={saveProfile4}
    color={SocialColor.themeBlue}
  >
  {
    isEdit ? 
    <BasicInfo4Edit 
      experiences={experiences}
      setExperiences={setExperiences}
    />:
    <BasicInfo4Read 
      experiences={experiences}
    />
  }
  </ReadEdit>
  </>)
}