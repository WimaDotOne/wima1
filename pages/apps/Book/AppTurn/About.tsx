import Head from "next/head"
import { About } from "../../../../apps/Book/F/BookApp/Public/About/About"

export default function AboutPage() {
  return(<>
    <Head>
      <title>Book</title>
      <meta name="description" content="Book"/>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <About />
  </>)
}