import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { AppTurn } from '../../../apps/Movic/F/MovicApp/MovicWindow/MovicWindow'
import { About } from '../../../apps/Movic/F/MovicApp/Public/About/About'
import { IsWimaUserLogin } from '../../../apps/Wima/fWima'
import { useAppleWindow } from '../../../libs/Core/Core2/AppleWindow/fAppleWindow'

const Movic: NextPage = () => {

  const win = useAppleWindow()
  useEffect(()=>{
    win?.setViewId(AppTurn.About)
  })
  return (<>
    <Head>
      <title>Movic</title>
      <meta name="description" content="Movic" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <IsWimaUserLogin />
    <About />
  </>)
}

export default Movic

