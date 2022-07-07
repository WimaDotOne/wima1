import Head from 'next/head'
import { Project } from '../../../../apps/Book/F/BookApp/My/Project/Project'
import { GatherWimaEnv } from '../../../../apps/Wima/F/WimaEnv/GatherWimaEnv'
import { IsWimaUserLogin } from '../../../../apps/Wima/fWima'

export default function ProjectPage() {
  return (<>
    <Head>
      <title>Book</title>
      <meta name="description" content="Book" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0"></meta>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <IsWimaUserLogin />
    <GatherWimaEnv />
    <Project />
  </>)
}