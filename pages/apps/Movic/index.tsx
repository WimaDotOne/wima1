import type { NextPage } from 'next'
import Head from 'next/head'
import { About } from '../../../apps/Movic/F/MovicApp/Public/About/About'
import { IsWimaUserLogin } from '../../../apps/Wima/fWima'

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

