import Head from 'next/head'
import { Login } from '../../../apps/Thanky/App/F/Views/Public/Login/Login'

export default function LoginPage() {

  return (<>
    <Head>
      <title>Thanky</title>
      <meta name="description" content="Thanky" />
      <link rel="icon" href="/apps/WimaHome/AppIcons/thanky.png" />
    </Head>
    <Login />
  </>)
}


