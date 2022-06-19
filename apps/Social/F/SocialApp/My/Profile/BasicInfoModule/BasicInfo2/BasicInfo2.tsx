import { useEffect, useState } from "react"
import { Post2, useShield } from "../../../../../../../../libs/Core/Core1/fCore1"
import { ReadEdit } from "../../../../../../../../libs/Pop/Pop1/fPop1"
import { SocialColor } from "../../../../../CSS/SocialColor"
import { ISocialProfile } from "../../../../../Model/ISocialProfile"
import { BasicInfo2Edit } from "./BasicInfo2Edit/BasicInfo2Edit"
import { BasicInfo2Read } from "./BasicInfo2Read/BasicInfo2Read"

interface IBasicInfo2Prop {
  profile: ISocialProfile
  refresh: ()=>void
}

export function BasicInfo2({
  profile,
  refresh
}: IBasicInfo2Prop) {

  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [personality2, setPersonality2] = useState<string>()
  const [personality16, setPersonality16] = useState<string>()
  const [zodiacSign, setZodiacSign] = useState<string>()
  const shield = useShield()

  useEffect(()=>{
    setPersonality2(profile.personality2)
    setPersonality16(profile.personality16)
    setZodiacSign(profile.zodiacSign)
  }, [profile])

  async function saveProfile2() {
    await Post2(shield, "/social/SaveProfile2",
    {
      personality2,
      personality16,
      zodiacSign
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
  <ReadEdit title="Personality" isEdit={isEdit}
    setIsEdit={setIsEdit}
    onCancel={onCancel}
    onSave={saveProfile2}
    color={SocialColor.themeBlue}
  >
  {
    isEdit ? 
    <BasicInfo2Edit 
      personality2={personality2}
      personality16={personality16}
      zodiacSign={zodiacSign}
      setPersonality2={setPersonality2}
      setPersonality16={setPersonality16}
      setZodiacSign={setZodiacSign}
    />:
    <BasicInfo2Read 
      personality2={personality2}
      personality16={personality16}
      zodiacSign={zodiacSign}
    />
  }
  </ReadEdit>
  </>)
}