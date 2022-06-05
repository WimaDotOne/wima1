import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { IsWimaUserLogin } from '../../../apps/Wima/fWima'
import { useAppleWindow } from '../../../libs/Core/Core2/AppleWindow/fAppleWindow'

export default function SocialPage() {

  const win = useAppleWindow()
  useEffect(()=>{
    //win?.setViewId(AppTurn.About)
  })
  return (<>
    <Head>
      <title>Social</title>
      <meta name="description" content="Social" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <IsWimaUserLogin />
  </>)
}


