import type { NextPage } from 'next'
import Head from 'next/head'
import { MyMovies } from '../../../../apps/Movic/F/MovicApp/My/MyMovies/MyMovies'
import { IsWimaUserLogin } from '../../../../apps/Wima/fWima'

const Movic: NextPage = () => {
  return (<>
    <Head>
      <title>Movic</title>
      <meta name="description" content="Movic" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <IsWimaUserLogin />
    <MyMovies />
  </>)
}

export default Movic

