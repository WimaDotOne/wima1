import Head from "next/head";
import { ExhibitBook } from "../../../../apps/Book/F/BookApp/Public/ExhibitBook/ExhibitBook";

export default function ExhibitBookPage() {
  return(<>
    <Head>
      <title>Book</title>
      <meta name="description" content="Book" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <ExhibitBook />
  </>)
}