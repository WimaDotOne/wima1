import type { NextPage } from 'next'
import Head from 'next/head'
import { MyMovics } from '../../../../apps/Movic/F/MovicApp/My/MyMovics/MyMovics'
import { IsWimaUserLogin } from '../../../../apps/Wima/fWima'

const Movic: NextPage = () => {
  return (<>
    <Head>
      <title>Movic</title>
      <meta name="description" content="Movic" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <IsWimaUserLogin />
    <MyMovics />
  </>)
}

export default Movic

