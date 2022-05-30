import { useState } from "react"
import { IProject } from "../../../../../Model/IProject"
import { SettingSectionHeader } from "../H/SettingSection/SettingSectionHeader"
import cl from "./DvdCover.module.scss"

interface IDvdCoverProp {
  project: IProject
}

export function DvdCover({
  project
}: IDvdCoverProp) {

  const [imageUrl, setImageUrl] = useState<string>("")

  function onClickPencil() {

  }

  return(<>
    <SettingSectionHeader title="Cover Image"
      onClickPencil={onClickPencil}
    />
    <div className={cl.imageSpace}>
      <div className={cl.image} 
        style={{backgroundImage:`url(${imageUrl || "/apps/Movic/Icon/dvdCover.jpg"})`}}>
      </div>
    </div>

  </>)
}