import type { NextPage } from 'next'
import Head from 'next/head'
import { WimaPrivacy } from '../../../../apps/Wima/F/WimaLogin/Terms/WimaPrivacy'

const Page: NextPage = () => {

  return (<>
    <Head>
      <title>Privacy</title>
      <meta name="description" content="Wima Privacy" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <WimaPrivacy />
  </>)
}

export default Page
