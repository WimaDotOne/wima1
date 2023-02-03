import Head from 'next/head'
import { Home } from '../../../apps/Thanky/App/F/Views/Dashboard/Home/Home'
import { GatherWimaEnv } from '../../../apps/Wima/F/WimaEnv/GatherWimaEnv'

export default function DashboardPage() {

  return (<>
    <Head>
      <title>Thanky</title>
      <meta name="description" content="Thanky" />
      <link rel="icon" href="/apps/WimaHome/AppIcons/thanky.png" />
    </Head>
    <GatherWimaEnv />
    <Home />
  </>)
}


