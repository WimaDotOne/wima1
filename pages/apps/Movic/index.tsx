import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { AppTurn } from '../../../apps/Movic/F/MovicApp/MovicWindow/MovicWindow'
import { MyMovies } from '../../../apps/Movic/F/MovicApp/My/MyMovies/MyMovies'
import { About } from '../../../apps/Movic/F/MovicApp/Public/About/About'
import { IsWimaUserLogin } from '../../../apps/WimaHome/fWimaHome'
import { useAppleWindow } from '../../../libs/Core/Core2/AppleWindow/fAppleWindow'

const Movic: NextPage = () => {

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

