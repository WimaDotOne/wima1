import Head from "next/head"
import { ServiceListing } from "../../../../apps/Social/F/SocialApp/Supply/Services/ServiceListing"
import { IsWimaUserLogin } from "../../../../apps/Wima/fWima"

export default function ServicesPage() {
  return(<>
    <Head>
      <title>Social</title>
      <meta name="description" content="Social" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <IsWimaUserLogin />
    <ServiceListing />
  </>)
}