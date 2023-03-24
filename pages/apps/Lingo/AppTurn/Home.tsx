import Head from 'next/head'
import { Home } from '../../../../apps/Lingo/F/LingoApp/Home/Home'

export default function HomePage() {

  return (<>
    <Head>
      <title>Lingo</title>
      <meta name="description" content="Lingo" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Home />
  </>)
}


