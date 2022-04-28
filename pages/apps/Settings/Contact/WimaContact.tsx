import type { NextPage } from 'next'
import Head from 'next/head'
import { WimaContact } from '../../../../apps/Settings/WimaLogin/F/Contact/WimaContact'

const Page: NextPage = () => {

  return (<>
    <Head>
      <title>Contact</title>
      <meta name="description" content="Wima Contact" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <WimaContact />
  </>)
}

export default Page