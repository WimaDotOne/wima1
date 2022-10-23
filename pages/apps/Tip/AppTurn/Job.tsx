import Head from 'next/head'
import { Job } from '../../../../apps/Tip/F/TipApp/Attendant/Job/Job'

export default function JobPage() {
  return (<>
    <Head>
      <title>Tip</title>
      <meta name="description" content="Book" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0"></meta>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Job />
  </>)
}