import Head from "next/head"
import { Profile } from "../../../../apps/Social/F/SocialApp/My/Profile/Profile"
import { GatherWimaEnv } from "../../../../apps/Wima/F/WimaEnv/GatherWimaEnv"
import { IsWimaUserLogin } from "../../../../apps/Wima/fWima"

export default function ProfilePage() {
  return(<>
    <Head>
      <title>Sociable</title>
      <meta name="description" content="Sociable" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <IsWimaUserLogin />
    <Profile />
    <GatherWimaEnv />
  </>)
}