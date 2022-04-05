import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Div } from '../../../libs/Core/Core1/fCore1'
import cl from "./index.module.scss"

const Home: NextPage = () => {
  return (<>
    <Head>
      <title>Libs</title>
      <meta name="description" content="Wima Libs" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <Div padding={20} paddingTop={0}>
      <h3>Libs</h3>
      <div className={cl.links}>
      <Link href="/z/libs/Core/StripeLogin"><a>Login</a></Link> &nbsp;&nbsp;
      <Link href="/z/libs/Core/StripeLogin/Contact"><a>Contact</a></Link> &nbsp;&nbsp;
      <Link href="/z/libs/Core/StripeLogin/Terms"><a>Terms</a></Link> &nbsp;&nbsp;
      <Link href="/z/libs/Core/StripeLogin/Privacy"><a>Privacy</a></Link> &nbsp;&nbsp;
      </div>
   </Div>
  </>)
}

export default Home
