import Head from 'next/head'
import { useEffect } from 'react'
import { Learn } from '../../../apps/Kayla/F/KaylaApp/Learn/Learn'
import { AppTurn } from '../../../apps/Kayla/F/KaylaApp/KaylaWindow/KaylaWindow'
import { useAppleWindow } from '../../../libs/Core/Core2/AppleWindow/fAppleWindow'

export default function KaylaPage() {

  const win = useAppleWindow()
  useEffect(()=>{
    win?.setViewId(AppTurn.Learn)
  })

  return (<>
    <Head>
      <title>Kayla</title>
      <meta name="description" content="Kayla" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Learn />
  </>)
}


