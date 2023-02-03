import Head from 'next/head'
import { Landing } from '../../../apps/Thanky/App/F/Views/Public/Landing/Landing'
import { GatherWimaEnv } from '../../../apps/Wima/F/WimaEnv/GatherWimaEnv'

export default function LandingPage() {

  return (<>
    <Head>
      <title>Thanky</title>
      <meta name="description" content="Thanky" />
      <link rel="icon" href="/apps/WimaHome/AppIcons/thanky.png" />
    </Head>
    
    <Landing />
    <GatherWimaEnv />
  </>)
}


