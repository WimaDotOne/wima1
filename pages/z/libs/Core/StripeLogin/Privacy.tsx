import Head from 'next/head'
import { useRouter } from 'next/router'
import { Privacy } from '../../../../../libs/Core/Core1/StripeLogin/Demo/Privacy'

export default function DemoPage() {

  const router = useRouter()
  function goTo() {
    router.push("/z/libs/")
  }

  return (<>
    <Head>
      <title>Privacy</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
    </Head>
    <Privacy onClickLogo={goTo}/>
  </>
  )
}
