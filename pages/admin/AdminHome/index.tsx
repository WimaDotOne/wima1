import Head from 'next/head'
import { AdminLogin } from '../../../admin/WimaAdmin/F/AdminLogin/AdminLogin'


export default function AdminHomePage() {

  return (<>
    <Head>
      <title>Wima Admin</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <AdminLogin />
  </>)
}


