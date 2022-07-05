import type { NextPage } from 'next'
import Head from 'next/head'
import { WimaLogin } from '../../../apps/Wima/fWima'

const Page: NextPage = () => {

  return (<>
    <Head>
      <title>Login</title>
      <meta name="description" content="Wima Login" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <WimaLogin />
  </>)
}



export default Page

