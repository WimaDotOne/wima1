import Head from 'next/head'
import { useEffect } from 'react'
import { AppTurn } from '../../../apps/Social/F/SocialApp/SocialWindow/SocialWindow'
import { Landing } from '../../../apps/Tip/F/TipApp/Landing/Landing'
import { IsWimaUserLogin } from '../../../apps/Wima/fWima'
import { useAppleWindow } from '../../../libs/Core/Core2/AppleWindow/fAppleWindow'

export default function SocialPage() {

  const win = useAppleWindow()
  useEffect(()=>{
    win?.setViewId(AppTurn.About)
  })
  return (<>
    <Head>
      <title>Tip</title>
      <meta name="description" content="Tip" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <IsWimaUserLogin />
    <Landing />
  </>)
}


