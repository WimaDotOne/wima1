import Head from "next/head"
import { MyProfile } from "../../../../apps/Social/F/SocialApp/My/MyProfile/MyProfile"
import { IsWimaUserLogin } from "../../../../apps/Wima/fWima"

export default function MyProfilePage() {
  return(<>
    <Head>
      <title>Social</title>
      <meta name="description" content="Social" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <IsWimaUserLogin  />
    <MyProfile />
  </>)
}