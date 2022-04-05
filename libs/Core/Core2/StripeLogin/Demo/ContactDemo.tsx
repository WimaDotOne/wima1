import Head from "next/head"
import { Contact } from "../fLogin"

export function ContactDemo() {


  return(<>
    <Head>
      <title>Contact</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
    </Head>
    
    <Contact email="wimadotone@gmail.com"/>

  </>)
}