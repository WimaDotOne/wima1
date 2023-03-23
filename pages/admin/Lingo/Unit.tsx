import Head from 'next/head'
import { Unit } from '../../../admin/Lingo/F/LingoAdmin/Unit/Unit'
import { GatherWimaEnv } from '../../../apps/Wima/F/WimaEnv/GatherWimaEnv'

export default function LanguagesPage() {

  return (<>
    <Head>
      <title>Lingo Admin</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <GatherWimaEnv />
    <Unit />
  </>)
}


