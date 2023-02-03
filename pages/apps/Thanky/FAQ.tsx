import Head from 'next/head'
import { FAQ } from '../../../apps/Thanky/App/F/Views/Public/FAQ/FAQ'

export default function FAQPage() {

  return (<>
    <Head>
      <title>Thanky</title>
      <meta name="description" content="Thanky" />
      <link rel="icon" href="/apps/WimaHome/AppIcons/thanky.png" />
    </Head>
    <FAQ />
  </>)
}


