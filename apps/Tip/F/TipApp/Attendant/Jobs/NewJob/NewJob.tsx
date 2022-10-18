import { useState } from "react"
import { GENERAL_INPUT_MAX } from "../../../../../../../bConfig"
import { Post2, TextField1, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { AppleIconButtons, AppleWindowBottomBarFill, AppleWindowPlainBottomBarDiv, Div } from "../../../../../../../libs/Core/Core2/fCore2"
import { HeadLine } from "../../../../../../../libs/Pop/Pop3/fPop3"
import { TipColor } from "../../../../CSS/TipColor"
import cl from "./NewJob.module.scss"

interface INewJobProp {
  backToJobsHome: ()=>void
}
export function NewJob({
  backToJobsHome
}:INewJobProp) {

  const [businessName, setBusinessName] = useState<string>("")

  const shield = useShield()

  async function CreateNewJob() {
    await Post2(shield, "/tip/CreateMyJob", {
      businessName
    }, (res)=>{
      backToJobsHome()
    })
  }

  function IsNewJobInfoValid() {
    if(!businessName) return false
    return true
  }
  
  return(<>
    <div className={cl.newJob}>
      <HeadLine text="Start a new job"/>
      <Div height={30} />
      <div className={cl.fields}>
        <TextField1 value={businessName} 
          maxLength={GENERAL_INPUT_MAX}
          prompt="Business name"
          onChange={(newValue)=>{setBusinessName(newValue)}} />
      </div>
    </div>
    <AppleWindowBottomBarFill />
    <AppleWindowPlainBottomBarDiv>
      <AppleIconButtons color={TipColor.themeDarkBlue}
        icon1="x" onClick1={backToJobsHome}
        icon5="floppydisk" onClick5={CreateNewJob} disabled5={!IsNewJobInfoValid()}
      />
    </AppleWindowPlainBottomBarDiv>
  </>)
}