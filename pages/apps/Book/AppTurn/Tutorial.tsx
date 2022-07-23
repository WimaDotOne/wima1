import Head from "next/head";
import { Tutorial } from "../../../../apps/Book/F/BookApp/Public/Tutorial/Tutorial";

export default function TutorialPage() {
  return(<>
    <Head>
      <title>Book</title>
      <meta name="description" content="Book" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Tutorial />
  </>)
}