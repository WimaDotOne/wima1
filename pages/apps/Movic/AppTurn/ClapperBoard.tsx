import type { NextPage } from 'next'
import Head from 'next/head'
import { ClapperBoard } from '../../../../apps/Movic/F/MovicApp/My/ClapperBoard/ClapperBoard'

const Movic: NextPage = () => {
  return (<>
    <Head>
      <title>Movic</title>
      <meta name="description" content="Movic" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <ClapperBoard />
  </>)
}

export default Movic

