import Head from 'next/head'
import { useEffect } from 'react'
import { Learn } from '../../../apps/Lingo/F/LingoApp/Learn/Learn'
import { AppTurn } from '../../../apps/Lingo/F/LingoApp/LingoWindow/LingoWindow'
import { useAppleWindow } from '../../../libs/Core/Core2/AppleWindow/fAppleWindow'

export default function LingoPage() {

  const win = useAppleWindow()
  useEffect(()=>{
    win?.setViewId(AppTurn.Learn)
  })

  return (<>
    <Head>
      <title>Lingo</title>
      <meta name="description" content="Lingo" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Learn />
  </>)
}


