import Head from "next/head";
import { PaymentSetup } from "../../../../apps/Tip/F/TipApp/Attendant/PaymentSetup/PaymentSetup";

export default function PaymentSetupPage() {
  return(<>
    <Head>
      <title>Tip</title>
      <meta name="description" content="Tip" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <PaymentSetup />
  </>)
}