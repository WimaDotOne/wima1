import Head from 'next/head'
import { Learn } from '../../../apps/Lingo/F/LingoApp/Learn/Learn'

export default function LingoPage() {


  return (<>
    <Head>
      <title>Lingo</title>
      <meta name="description" content="Lingo" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Learn />
  </>)
}

