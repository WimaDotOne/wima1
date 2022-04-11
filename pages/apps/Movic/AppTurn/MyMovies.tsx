import type { NextPage } from 'next'
import Head from 'next/head'
import { MyMovies } from '../../../../apps/Movic/F/MyMovies/MyMovies'

const Movic: NextPage = () => {
  return (<>
    <Head>
      <title>Movic</title>
      <meta name="description" content="Movic" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <MyMovies />
  </>)
}

export default Movic

