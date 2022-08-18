import Head from "next/head"
import { Div, HLine, LimitWidth } from "../../../../../libs/Core/Core2/fCore2"
import { LogoBar, Paragraph, SectionHeader, TermHeader } from "../../../../../libs/Core/Core1/fCore1"
import { useRouter } from "next/router"

interface IWimaDeleteProp {
}

export function WimaDelete({
}: IWimaDeleteProp) {

  const logo = "Wima"
  const domain = "wima.one"
  const brand = "Wima"
  const lastUpdate = "Aug 18, 2022"

  const router = useRouter()
  function onClickLogo() {
    router.push("/")
  }

  return(<>
    <Head>
      <title>Privacy</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
    </Head>
  
    <div>
    <LimitWidth gray>
      <LogoBar logo={logo} onClick={onClickLogo}/>
    </LimitWidth>
    <HLine />
    <Div height={100}/>
    <LimitWidth maxWidth={800}>
      <TermHeader header="User Data Delete"
        lastUpdate={lastUpdate}/>
      <SectionHeader text="Instruction" />
      <Paragraph>
        To request deletion of your user data. Please contact wimadotone@gmail.com. We can only identify your identity by the email address associated with your login account.
      </Paragraph>
    </LimitWidth>
    <Div height={100} />
    </div>
  </>)
}