import Head from 'next/head'
import { useEffect } from 'react'
import { AppTurn } from '../../../apps/Social/F/SocialApp/SocialWindow/SocialWindow'
import { GiveTips } from '../../../apps/Thanky/App/F/Views/Public/GiveTips/GiveTips'
import { useAppleWindow } from '../../../libs/Core/Core2/AppleWindow/fAppleWindow'

export default function GiveTipsPage() {

  const win = useAppleWindow()
  useEffect(()=>{
    win?.setViewId(AppTurn.About)
  })
  return (<>
    <Head>
      <title>Thanky</title>
      <meta name="description" content="Thanky" />
      <link rel="icon" href="/apps/WimaHome/AppIcons/thanky.png" />
    </Head>
    <GiveTips />
  </>)
}


