import Head from "next/head"
import { StoryWimaCircle } from "../../../../apps/Story/F/StoryApp/Public/StoryWimaCircle/StoryWimaCircle"

export default function WimaCirclePage() {
  return(<>
    <Head>
      <title>Story</title>
      <meta name="description" content="Story" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <StoryWimaCircle />
  </>)
}