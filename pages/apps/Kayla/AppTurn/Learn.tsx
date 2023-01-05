import Head from 'next/head'
import { Learn } from '../../../../apps/Kayla/F/KaylaApp/Learn/Learn'

export default function LearnPage() {

  return (<>
    <Head>
      <title>Kayla</title>
      <meta name="description" content="Kayla" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Learn />
  </>)
}


