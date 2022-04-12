import Head from "next/head"
import { Div, HLine, LimitWidth } from "../../fCore1"
import { LogoBar, Paragraph, SectionHeader, SubParagraph, SubSectionHeader, TermHeader } from "../fLogin"

interface ITermsProp {
  onClickLogo?: ()=>void
}
export function Terms({
  onClickLogo,
}:ITermsProp) {
  const logo = "Logo"
  const domain = "wima.one"
  const brand = "Brand"
  const lastUpdate = "Feb 2, 2022"

  return(<>

    <Head>
      <title>Terms</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
    </Head>
    
    <LimitWidth gray>
      <LogoBar logo={logo} onClick={onClickLogo}/>
    </LimitWidth>
    <HLine />
    <Div height={100}/>

    <LimitWidth maxWidth={800}>
      <TermHeader header="Terms of Service"
        lastUpdate={lastUpdate}/>
      <SectionHeader text="Welcome" />
      <Paragraph>
        We ("{brand}") provide services to you when you visit {domain} ("{brand} Services"). By using the {brand} Services, you are agreeing to be bound by the following Terms of Service.
      </Paragraph>
      <Paragraph>
        Any new features or tools which are added to the current {brand} Services shall be also subject to the Terms of Service. You can review the current version of the Terms of Service at any time here. {brand} reserves the right to update and change the Terms of Service by updating the {brand} website. You are advised to check the Terms of Service from time to time for any updates or changes that may impact you. and if you do not accept such changes, you must cease using the {brand} Services.
      </Paragraph>
      <SectionHeader text="How to ***" />
      <Paragraph>
        ***
      </Paragraph>
      <SubParagraph>
        ***
      </SubParagraph>
      <SubParagraph>
        ***
      </SubParagraph>
      <SectionHeader text="Lawyer says" />
      <SubSectionHeader text="Copyright" />
      <Paragraph>
        All content included in or made available through any {brand} Service, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software is the property of {brand} or its content suppliers and protected by United States and international copyright laws. The compilation of all content included in or made available through any {brand} Services is the exclusive property of {brand} and protected by U.S. and international copyright laws.
      </Paragraph>
      <SubSectionHeader text={`${brand} Rights`}/>
      <Paragraph>
        We reserve the right to modify or terminate the {brand} Services for any reason, without notice at any time. Not all {brand} Services and features are available in every jurisdiction and we are under no obligation to make any {brand} Services or features available in any jurisdiction.
      </Paragraph>
      <Paragraph>
        We reserve the right to refuse {brand} Services to anyone for any reason at any time.
      </Paragraph>
      <SubSectionHeader text="LIMITATION of LIABILITY" />
      <Paragraph>
        THE DICTIONARY SERVICES AND ALL INFORMATION, CONTENT, MATERIALS, PRODUCTS AND OTHER SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THE DICTIONARY SERVICES ARE PROVIDED BY DICTIONARY ON AN "AS IS" AND "AS AVAILABLE" BASIS. DICTIONARY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THE DICTIONARY SERVICES, OR THE INFORMATION, CONTENT, MATERIALS, PRODUCTS OR OTHER SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THE DICTIONARY SERVICES. YOU EXPRESSLY AGREE THAT YOUR USE OF THE DICTIONARY SERVICES IS AT YOUR SOLE RISK.
      </Paragraph>
      <Paragraph>
        TO THE FULL EXTENT PERMISSIBLE BY LAW, DICTIONARY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. DICTIONARY DOES NOT WARRANT THAT THE DICTIONARY SERVICES, INFORMATION, CONTENT, MATERIALS, PRODUCTS OR OTHER SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THE DICTIONARY SERVICES, DICTIONARY'S SERVERS OR ELECTRONIC COMMUNICATIONS SENT FROM DICTIONARY ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. TO THE FULL EXTENT PERMISSIBLE BY LAW, DICTIONARY WILL NOT BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING FROM THE USE OF ANY DICTIONARY SERVICE, OR FROM ANY INFORMATION, CONTENT, MATERIALS, PRODUCTS OR OTHER SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH ANY DICTIONARY SERVICE, INCLUDING, BUT NOT LIMITED TO DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, AND CONSEQUENTIAL DAMAGES.
      </Paragraph>
    </LimitWidth>
    <Div height={100}/>
  </>)
}