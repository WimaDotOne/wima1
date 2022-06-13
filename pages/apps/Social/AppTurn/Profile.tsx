import Head from "next/head"
import { Profile } from "../../../../apps/Social/F/SocialApp/My/Profile/Profile"
import { IsWimaUserLogin } from "../../../../apps/Wima/fWima"

export default function ProfilePage() {
  return(<>
    <Head>
      <title>Social</title>
      <meta name="description" content="Social" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <IsWimaUserLogin />
    <Profile />
  </>)
}