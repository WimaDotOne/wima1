import Head from 'next/head'
import { useEffect } from 'react'
import { Languages } from '../../../admin/Lingo/F/LingoAdmin/Languages/Languages'
import { AdminTurn } from '../../../admin/Lingo/F/LingoAdmin/LingoAdminWindow/LingoAdminWindow'
import { useAppleWindow } from '../../../libs/Core/Core2/AppleWindow/fAppleWindow'


export default function LingoAdminPage() {

  const win = useAppleWindow()
  useEffect(()=>{
    win?.setViewId(AdminTurn.Languages)
  })

  return (<>
    <Head>
      <title>Lingo Admin</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Languages />
  </>)
}


