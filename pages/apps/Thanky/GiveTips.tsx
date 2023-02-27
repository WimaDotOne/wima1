import Head from 'next/head'
import { GiveTips } from '../../../apps/Thanky/App/F/Views/Public/GiveTips/GiveTips'

export default function GiveTipsPage() {

  return (<>
    <Head>
      <title>Thanky</title>
      <meta name="description" content="Thanky" />
      <link rel="icon" href="/apps/WimaHome/AppIcons/thanky.png" />
    </Head>
    <GiveTips />
  </>)
}


