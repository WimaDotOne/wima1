import type { NextPage } from 'next'
import Head from 'next/head'
import { SettingsHome } from '../../../apps/Settings/SettingsHome/F/SettingsHome/SettingsHome'

const Settings: NextPage = () => {

  return (<>
    <Head>
      <title>Settings</title>
      <meta name="description" content="Settings" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <SettingsHome />
  </>)
}



export default Settings

