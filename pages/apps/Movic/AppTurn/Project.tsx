import type { NextPage } from 'next'
import Head from 'next/head'
import { Project } from '../../../../apps/Movic/F/MovicApp/My/Project/Project'
import { IsWimaUserLogin } from '../../../../apps/Wima/fWima'

const Movic: NextPage = () => {
  return (<>
    <Head>
      <title>Movic</title>
      <meta name="description" content="Movic" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0"></meta>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <IsWimaUserLogin />
    <Project />
  </>)
}

export default Movic

