import Head from "next/head"
import { Receipt } from "../../../../apps/Social/F/SocialApp/My/Receipt/Receipt"
import { IsWimaUserLogin } from "../../../../apps/Wima/fWima"

export default function ReceiptPage() {
  return(<>
    <Head>
      <title>Sociable</title>
      <meta name="description" content="Sociable" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <IsWimaUserLogin />
    <Receipt />
  </>)
}