import Head from "next/head"
import { UniversityLogin } from "../../../../apps/Social/F/SocialApp/Public/UniversityLogin/UniversityLogin"

export default function UniversityLoginPage() {
  return(<>
    <Head>
      <title>Social</title>
      <meta name="description" content="Social" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <UniversityLogin />
  </>)
}