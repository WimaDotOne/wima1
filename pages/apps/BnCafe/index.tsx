import Head from 'next/head'
import { CafeBook } from '../../../apps/BnCafe/F/BnCafeApp/CafeBook/CafeBook'

export default function BnCafePage() {

  return (<>
    <Head>
      <title>B&N Cafe Recipes</title>
      <meta name="description" content="B&N Cafe Recipes" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <CafeBook />
  </>)
}


