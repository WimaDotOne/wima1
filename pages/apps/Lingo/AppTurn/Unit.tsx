import Head from 'next/head'
import { Unit } from '../../../../apps/Lingo/F/LingoApp/Unit/Unit'

export default function UnitPage() {

  return (<>
    <Head>
      <title>Lingo</title>
      <meta name="description" content="Lingo" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Unit />
  </>)
}


