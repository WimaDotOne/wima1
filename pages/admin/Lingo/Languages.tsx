import Head from 'next/head'
import { Languages } from '../../../admin/Lingo/F/LingoAdmin/Languages/Languages'

export default function LanguagesPage() {

  return (<>
    <Head>
      <title>Lingo Admin</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Languages />
  </>)
}


