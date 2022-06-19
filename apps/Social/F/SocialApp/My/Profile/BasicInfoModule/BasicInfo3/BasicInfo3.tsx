import { useEffect, useState } from "react"
import { Post2, useShield } from "../../../../../../../../libs/Core/Core1/fCore1"
import { ReadEdit } from "../../../../../../../../libs/Pop/Pop1/fPop1"
import { SocialColor } from "../../../../../CSS/SocialColor"
import { ISocialProfile } from "../../../../../Model/ISocialProfile"
import { BasicInfo3Edit } from "./BasicInfo3Edit/BasicInfo3Edit"
import { BasicInfo3Read } from "./BasicInfo3Read/BasicInfo3Read"

interface IBasicInfo3Prop {
  profile: ISocialProfile
  refresh: ()=>void
}

export function BasicInfo3({
  profile,
  refresh
}: IBasicInfo3Prop) {

  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [aboutMe, setAboutMe] = useState<string>()
  const shield = useShield()

  useEffect(()=>{
    setAboutMe(profile.aboutMe)
  }, [profile])

  async function saveProfile3() {
    await Post2(shield, "/social/SaveProfile3",
    {
      aboutMe
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
  <ReadEdit title="About Me" isEdit={isEdit}
    setIsEdit={setIsEdit}
    onCancel={onCancel}
    onSave={saveProfile3}
    color={SocialColor.themeBlue}
  >
  {
    isEdit ? 
    <BasicInfo3Edit 
      aboutMe={aboutMe}
      setAboutMe={setAboutMe}
    />:
    <BasicInfo3Read 
      aboutMe={aboutMe}
    />
  }
  </ReadEdit>
  </>)
}