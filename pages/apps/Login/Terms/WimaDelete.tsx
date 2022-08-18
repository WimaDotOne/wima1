import type { NextPage } from 'next'
import Head from 'next/head'
import { WimaDelete } from '../../../../apps/Wima/F/WimaLogin/Terms/WimaDelete'

const Page: NextPage = () => {

  return (<>
    <Head>
      <title>Privacy</title>
      <meta name="description" content="Wima Privacy" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <WimaDelete />
  </>)
}

export default Page
