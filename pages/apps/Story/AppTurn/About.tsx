import Head from "next/head"
import { About } from "../../../../apps/Story/F/StoryApp/Public/About/About"

export default function AboutPage() {
  return(<>
    <Head>
      <title>Story</title>
      <meta name="description" content="Story"/>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <About />
  </>)
}