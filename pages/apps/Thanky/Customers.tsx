import Head from 'next/head'
import { Customers } from '../../../apps/Thanky/App/F/Views/Dashboard/Customers/Customers'
import { GatherWimaEnv } from '../../../apps/Wima/F/WimaEnv/GatherWimaEnv'

export default function CustomersPage() {

  return (<>
    <Head>
      <title>Thanky</title>
      <meta name="description" content="Thanky" />
      <link rel="icon" href="/apps/WimaHome/AppIcons/thanky.png" />
    </Head>
    <GatherWimaEnv />
    <Customers />
  </>)
}


