import Head from 'next/head'
import { AdminHome } from '../../../admin/WimaAdmin/F/AdminHome/AdminHome'


export default function AdminHomePage() {

  return (<>
    <Head>
      <title>Wima Admin</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <AdminHome />
  </>)
}


