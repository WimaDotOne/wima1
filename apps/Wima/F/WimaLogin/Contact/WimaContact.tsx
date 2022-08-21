import Head from "next/head"
import { Contact } from "../../../../../libs/Core/Core1/fCore1"

export function WimaContact() {

  return(<>
    <Head>
      <title>Contact</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
    </Head>
    
    <Contact />

  </>)
}