import Head from "next/head"
import { GoodsListing } from "../../../../apps/Social/F/SocialApp/Supply/Goods/GoodsListing"
import { IsWimaUserLogin } from "../../../../apps/Wima/fWima"

export default function GoodsPage() {
  return(<>
    <Head>
      <title>Social</title>
      <meta name="description" content="Social" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <IsWimaUserLogin />
    <GoodsListing />
  </>)
}