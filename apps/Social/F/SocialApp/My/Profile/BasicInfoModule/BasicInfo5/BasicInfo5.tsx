import { useEffect, useState } from "react"
import { Post2, useShield } from "../../../../../../../../libs/Core/Core1/fCore1"
import { ReadEdit } from "../../../../../../../../libs/Pop/Pop1/fPop1"
import { SocialColor } from "../../../../../CSS/SocialColor"
import { ISocialProfile } from "../../../../../Model/ISocialProfile"
import { BasicInfo5Edit } from "./BasicInfo5Edit/BasicInfo5Edit"
import { BasicInfo5Read } from "./BasicInfo5Read/BasicInfo5Read"

interface IBasicInfo5Prop {
  profile: ISocialProfile
  refresh: ()=>void
}

export function BasicInfo5({
  profile,
  refresh
}: IBasicInfo5Prop) {

  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [skills, setSkills] = useState<string>("")
  const shield = useShield()

  useEffect(()=>{
    setSkills(profile.skills)
  }, [profile])

  async function saveProfile5() {
    await Post2(shield, "/social/SaveProfile5",
    {
      skills
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
  <ReadEdit title="Skills or Resources that might help others" 
    description="For example, knowledge from your major area of study, your native language, or a car."
    isEdit={isEdit}
    setIsEdit={setIsEdit}
    onCancel={onCancel}
    onSave={saveProfile5}
    color={SocialColor.themeBlue}
  >
  {
    isEdit ? 
    <BasicInfo5Edit 
      skills={skills}
      setSkills={setSkills}
    />:
    <BasicInfo5Read 
      skills={skills}
    />
  }
  </ReadEdit>
  </>)
}