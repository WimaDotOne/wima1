import Head from 'next/head'
import { Employee } from '../../../apps/Thanky/App/F/Views/Public/Employee/Employee'

export default function EmployeePage() {

  return (<>
    <Head>
      <title>Thanky</title>
      <meta name="description" content="Thanky" />
      <link rel="icon" href="/apps/WimaHome/AppIcons/thanky.png" />
    </Head>
    <Employee />
  </>)
}


