import Head from "next/head"
import { Div, HLine, LimitWidth } from "../../../../../libs/Core/Core2/fCore2"
import { LogoBar, Paragraph, SectionHeader, TermHeader } from "../../../../../libs/Core/Core1/fCore1"
import { useRouter } from "next/router"

interface IWimaPrivacyProp {
}
export function WimaPrivacy({
}: IWimaPrivacyProp) {
  const logo = "Wima"
  const domain = "wima.one"
  const brand = "Wima"
  const lastUpdate = "June 1, 2022"

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
      <TermHeader header="Privacy Notice"
        lastUpdate={lastUpdate}/>
      <SectionHeader text="Welcome" />
      <Paragraph>
        This Privacy Notice describes how {domain} ("{brand}") collects and processes your personal information. By using the services provided by the {brand} website ({brand} Services), you are consenting to the practices described in this Privacy Notice.
      </Paragraph>
      <SectionHeader text="1. Personal Data that We Collect" />
      <Paragraph>
        We receive and store name, email address, and the profile picture associated with your social media account when you login {brand} through social media.
      </Paragraph>
      <Paragraph>
        We receive and store any information you provide in relation to {brand} Services. Examples of such information includes, but not limited to, texts you entered and images you uploaded. You can choose not to provide certain information, but then you might not be able to take advantage of many of our {brand} Services.
      </Paragraph>
      <Paragraph>
        We automatically collect and store certain types of information about your usage of {brand} Services, including information about your interaction with content and services available through {brand} Services. Like many websites, we use "cookies". Examples of automatically collected information includes, but not limited to, timestamps of actions. 
      </Paragraph>
      <SectionHeader text="2. Cookies" />
      <Paragraph>
        We use cookies to provide you with essential features and services. Mainly we use cookies to decide if you are logged in {brand}. You can manage browser cookies through your browser settings.
      </Paragraph>
      <SectionHeader text="3. How do We Use Your Personal Data?" />
      <Paragraph>
        We use your email or social media info to sign you in {brand}.
      </Paragraph>
      <Paragraph>
        We might send information to your email address to communicate the change of {brand} Services or to promote new services.
      </Paragraph>
      <SectionHeader text="4. Do We Share Your Personal Data?" />
      <Paragraph>
        We are not in the business of selling our users' personal information to others.
      </Paragraph>
      <Paragraph>
        {brand} uses third party services storing your data. For example our database provider will have access to your data.
      </Paragraph>

    </LimitWidth>
    <Div height={100} />
    </div>
  </>)
}