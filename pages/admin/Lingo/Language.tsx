import Head from 'next/head'
import { Language } from '../../../admin/Lingo/F/LingoAdmin/Language/Language'

export default function LanguagesPage() {

  return (<>
    <Head>
      <title>Lingo Admin</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Language />
  </>)
}


