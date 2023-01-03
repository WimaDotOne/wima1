import Head from 'next/head'
import { useEffect } from 'react'
import { About } from '../../../apps/Quiz/F/QuizApp/Public/About/About'
import { AppTurn } from '../../../apps/Social/F/SocialApp/SocialWindow/SocialWindow'
import { IsWimaUserLogin } from '../../../apps/Wima/fWima'
import { useAppleWindow } from '../../../libs/Core/Core2/AppleWindow/fAppleWindow'

export default function SocialPage() {

  const win = useAppleWindow()
  useEffect(()=>{
    win?.setViewId(AppTurn.About)
  })
  return (<>
    <Head>
      <title>Quiz</title>
      <meta name="description" content="Quiz" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <IsWimaUserLogin />
    <About/>
  </>)
}


