import Head from 'next/head'
import { Payouts } from '../../../apps/Thanky/App/F/Views/Stripe/Payouts/Payouts'
import { GatherWimaEnv } from '../../../apps/Wima/F/WimaEnv/GatherWimaEnv'

export default function DashboardPage() {

  return (<>
    <Head>
      <title>Thanky</title>
      <meta name="description" content="Thanky" />
      <link rel="icon" href="/apps/WimaHome/AppIcons/thanky.png" />
    </Head>
    <GatherWimaEnv />
    <Payouts />
  </>)
}


