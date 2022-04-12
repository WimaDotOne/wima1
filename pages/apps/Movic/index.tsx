import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { AppTurn } from '../../../apps/Movic/F/MovicApp/H/MovicWindow/MovicWindow'
import { MyMovies } from '../../../apps/Movic/F/MovicApp/My/MyMovies/MyMovies'
import { About } from '../../../apps/Movic/F/MovicApp/Public/About/About'
import { useAppleWindow } from '../../../libs/Core/Core2/AppleWindow/fAppleWindow'

const Movic: NextPage = () => {

  const [landingViewId, setLandingViewId] = useState<string>(AppTurn.About)
  const win = useAppleWindow()



  useEffect(()=>{
    function land() {

      if(win) {
        win?.setViewId(landingViewId)
      }
    }
    
    land()
  },[])

  return (<>
    <Head>
      <title>Movic</title>
      <meta name="description" content="Movic" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Landing viewId={landingViewId} />
  </>)
}

interface ILandingProp {
  viewId: string
}
function Landing({viewId}: ILandingProp) {
  switch(viewId) {
    case AppTurn.MyMovies: return(<MyMovies />)
    default: return <About />
  }
}

export default Movic

