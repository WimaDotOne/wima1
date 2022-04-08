import type { NextPage } from 'next'
import Head from 'next/head'
import { WimaHome } from '../apps/WimaHome/fWimaHome'

const Home: NextPage = () => {
  return (<>
    <Head>
      <title>Wima</title>
      <meta name="description" content="Wima" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <WimaHome />
  </>)
}

export default Home
