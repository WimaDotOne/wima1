import { useEffect, useState } from "react"
import { Post2, useShield } from "../../../../../../../../libs/Core/Core1/fCore1"
import { ReadEdit } from "../../../../../../../../libs/Pop/Pop1/fPop1"
import { SocialColor } from "../../../../../CSS/SocialColor"
import { ISocialProfile } from "../../../../../Model/ISocialProfile"
import { BasicInfo1Edit } from "./BasicInfo1Edit/BasicInfo1Edit"
import { BasicInfo1Read } from "./BasicInfo1Read/BasicInfo1Read"

interface IBasicInfo1Prop {
  profile: ISocialProfile
  refresh: ()=>void
}

export function BasicInfo1({
  profile,
  refresh
}: IBasicInfo1Prop) {

  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [givenName, setGivenName] = useState<string>()
  const [familyName, setFamilyName] = useState<string>()
  const [universityAffiliation, setUniversityAffiliation] = useState<string>()
  const [major, setMajor] = useState<string>()
  const shield = useShield()

  useEffect(()=>{
    setGivenName(profile.givenName)
    setFamilyName(profile.familyName)
    setUniversityAffiliation(profile.universityAffiliation)
    setMajor(profile.major)
  }, [profile])

  async function saveProfile1() {
    await Post2(shield, "/social/SaveProfile1",
    {
      givenName,
      familyName,
      universityAffiliation,
      major
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
  <ReadEdit title="Name" isEdit={isEdit}
    setIsEdit={setIsEdit}
    onCancel={onCancel}
    onSave={saveProfile1}
    color={SocialColor.themeBlue}
  >
  {
    isEdit ? 
    <BasicInfo1Edit 
      givenName={givenName} setGivenName={setGivenName}
      familyName={familyName} setFamilyName={setFamilyName}
      universityAffiliation={universityAffiliation}
      setUniversityAffiliation={setUniversityAffiliation}
      major={major} setMajor={setMajor}
    />:
    <BasicInfo1Read 
      givenName={givenName}
      familyName={familyName}
      universityAffiliation={universityAffiliation}
      major={major}
    />
  }
  </ReadEdit>
  </>)
}