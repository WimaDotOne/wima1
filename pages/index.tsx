import type { NextPage } from 'next'
import Head from 'next/head'
import { WimaHome } from '../apps/Wima/fWima'

const Home: NextPage = () => {
  return (<>
    <Head>
      <title>Wima</title>
      <meta name="description" content="Wima web apps in one place: Sociable, Lingo, Movic, Book, BN Cafe Recipe" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <WimaHome />
  </>)
}

export default Home
