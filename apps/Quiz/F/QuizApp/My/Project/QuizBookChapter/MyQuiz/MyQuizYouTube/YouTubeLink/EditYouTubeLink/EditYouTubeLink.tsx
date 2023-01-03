import { GENERAL_INPUT_MAX } from "../../../../../../../../../../../bConfig"
import { TextField1 } from "../../../../../../../../../../../libs/Core/Core1/fCore1"
import cl from "./EditYouTubeLink.module.scss"

interface IEditYouTubeLink {
  youTubeLink: string,
  setYouTubeLink: (youTubeLink: string)=>void
}

export function EditYouTubeLink({
  youTubeLink, setYouTubeLink
}: IEditYouTubeLink) {

  function onChange(newValue: string) {
    setYouTubeLink(newValue)
  }

  return(<>
   <div className={cl.field}>
     <TextField1 prompt=""
       value={youTubeLink} onChange={onChange} 
       maxLength={GENERAL_INPUT_MAX * 2}/>
   </div>
  </>)
}