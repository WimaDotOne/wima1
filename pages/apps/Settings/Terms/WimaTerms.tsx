import type { NextPage } from 'next'
import Head from 'next/head'
import { WimaTerms } from '../../../../apps/Settings/WimaLogin/F/Terms/WimaTerms'

const Page: NextPage = () => {

  return (<>
    <Head>
      <title>Terms</title>
      <meta name="description" content="Wima Terms" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <WimaTerms />
  </>)
}

export default Page