import Head from "next/head"
import { NeedListing } from "../../../../apps/Social/F/SocialApp/Demand/Needs/NeedListing"
import { IsWimaUserLogin } from "../../../../apps/Wima/fWima"

export default function NeedsPage() {
  return(<>
    <Head>
      <title>Social</title>
      <meta name="description" content="Social" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <IsWimaUserLogin />
    <NeedListing />
  </>)
}