import type { NextPage } from 'next'
import Head from 'next/head'
import { MovicApp } from '../../../apps/Movic/F/MovicApp/MovicApp'

const Movic: NextPage = () => {
  return (<>
    <Head>
      <title>Movic</title>
      <meta name="description" content="Movic" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <MovicApp />
  </>)
}

export default Movic

