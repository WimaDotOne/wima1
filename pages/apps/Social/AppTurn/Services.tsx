import Head from "next/head"
import { ServiceListing } from "../../../../apps/Social/F/SocialApp/Supply/Services/ServiceListing"
import { IsWimaUserLogin } from "../../../../apps/Wima/fWima"

export default function ServicesPage() {
  return(<>
    <Head>
      <title>Sociable</title>
      <meta name="description" content="Sociable" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <IsWimaUserLogin />
    <ServiceListing isGoods={false} />
  </>)
}