import Head from "next/head"
import { UniversityLogin } from "../../../../apps/Social/F/SocialApp/Public/UniversityLogin/UniversityLogin"

export default function UniversityLoginPage() {
  return(<>
    <Head>
      <title>Sociable</title>
      <meta name="description" content="Sociable" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <UniversityLogin />
  </>)
}