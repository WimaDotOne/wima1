import Head from 'next/head'
import { useEffect } from 'react'
import { Home } from '../../../apps/Lingo/F/LingoApp/Home/Home'
import { AppTurn } from '../../../apps/Lingo/F/LingoApp/LingoWindow/LingoWindow'
import { useAppleWindow } from '../../../libs/Core/Core2/AppleWindow/fAppleWindow'

export default function LingoPage() {

  const win = useAppleWindow()
  useEffect(()=>{
    win?.setViewId(AppTurn.Home)
  })

  return (<>
    <Head>
      <title>Lingo</title>
      <meta name="description" content="Lingo" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Home />
  </>)
}


