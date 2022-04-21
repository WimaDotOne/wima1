import type { NextPage } from 'next'
import Head from 'next/head'
import { Projects } from '../../../../apps/Movic/F/MovicApp/My/Projects/Projects'

const Movic: NextPage = () => {
  return (<>
    <Head>
      <title>Movic</title>
      <meta name="description" content="Movic" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <Projects />
  </>)
}

export default Movic

