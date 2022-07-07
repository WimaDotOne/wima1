import Head from 'next/head'
import { Projects } from '../../../../apps/Book/F/BookApp/My/Projects/Projects'
import { IsWimaUserLogin } from '../../../../apps/Wima/fWima'

export default function ProjectsPage() {
  return (<>
    <Head>
      <title>Book</title>
      <meta name="description" content="Book" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0"></meta>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <IsWimaUserLogin />
    <Projects />
  </>)
}