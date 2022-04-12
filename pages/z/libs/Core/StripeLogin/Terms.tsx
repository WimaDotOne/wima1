import Head from 'next/head'
import { useRouter } from 'next/router'
import { Terms } from '../../../../../libs/Core/Core1/StripeLogin/Demo/Terms'

export default function DemoPage() {

  const router = useRouter()
  function goTo() {
    router.push("/z/libs")
  }
  return (<>
    <Head>
      <title>Terms</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
    </Head>
    
    <Terms onClickLogo={goTo}/>
  </>
  )
}
