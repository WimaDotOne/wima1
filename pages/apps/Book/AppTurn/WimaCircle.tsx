import Head from "next/head"
import { BookWimaCircle } from "../../../../apps/Book/F/BookApp/Public/BookWimaCircle/BookWimaCircle"

export default function WimaCirclePage() {
  return(<>
    <Head>
      <title>Book</title>
      <meta name="description" content="Book" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <BookWimaCircle />
  </>)
}