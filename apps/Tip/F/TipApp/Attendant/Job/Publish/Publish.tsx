import { useState } from "react"
import { Post2, useShield } from "../../../../../../../libs/Core/Core1/fCore1"
import { ReadEdit } from "../../../../../../../libs/Pop/Pop1/fPop1"
import { TipColor } from "../../../../CSS/TipColor"
import { IJob } from "../../../../Model/IJob"
import { EditPublish } from "./EditPublish/EditPublish"
import { ViewPublish } from "./ViewPublish/ViewPublish"

interface IPublishProp {
  job: IJob
  reloadJob: ()=>void
}
export function Publish({
  job,
  reloadJob
}: IPublishProp) {

  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [isJobPublic, setIsJobPublic] = useState<boolean>(!!job.isJobPublic)
  
  const shield = useShield()

  async function saveIsJobPublic() {
    await Post2(shield, "/tip/SaveIsJobPublic",
      {
        jobId: job.id,
        isJobPublic
      }, () => {
        reloadJob()
        setIsEdit(false)
      }
    )
  }

  function onCancel() {
    reloadJob()
    setIsEdit(false)
    setIsJobPublic(!!job.isJobPublic)
  }

  return(<>
    <ReadEdit title="Make job public" isEdit={isEdit}
      setIsEdit={setIsEdit}
      onCancel={onCancel}
      onSave={saveIsJobPublic}
      color={TipColor.themeDarkBlue}
    >
    {
      isEdit ? 
      <EditPublish checked={isJobPublic} setChecked={setIsJobPublic}/>:
      <ViewPublish isJobPublic={isJobPublic}/>
    }
    </ReadEdit>
  </>)
}