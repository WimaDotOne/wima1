import Head from 'next/head'
import { Place } from '../../../apps/Thanky/App/F/Views/Public/Place/Place'

export default function PlacePage() {

  return (<>
    <Head>
      <title>Thanky</title>
      <meta name="description" content="Thanky" />
      <link rel="icon" href="/apps/WimaHome/AppIcons/thanky.png" />
    </Head>
    <Place />
  </>)
}


