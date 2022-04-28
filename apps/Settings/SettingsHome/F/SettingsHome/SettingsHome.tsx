import cl from "./SettingsHome.module.scss"
import { useRouter } from "next/router"
import { ISetting } from "../Model/ISetting"
import { SettingIcon } from "./SettingIcon/Settinglcon"
import { useEffect, useState } from "react"
import { Get2, useShield } from "../../../../../libs/Core/Core1/fCore1"

interface ISettingsHomeProp {
}
export function SettingsHome({
}: ISettingsHomeProp) {

  const [settings, setSettings] = useState<Array<ISetting>>([])
  const shield = useShield()
  const router = useRouter()

  async function loadSettings() {

    await Get2(shield, "/settingsHome/LoadSettings",
      (res)=>{
        setSettings(res.settings)
      }
    )
  }

  useEffect(()=>{
    loadSettings()
  },[])

  function goToSetting(route: string) {
    router.push(`/apps/Settings/${route}`)
  }

  return(<>
    <div className={cl.home}>
    {
      settings.map((setting, i)=>
        <SettingIcon setting={setting} key={i}
          onClick={()=>{
            goToSetting(setting.route)
          }}
        />
      )
    }
    </div>
  </>)
}