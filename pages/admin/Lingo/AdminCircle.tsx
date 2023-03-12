import Head from "next/head";
import { LingoAdminCircle } from "../../../admin/Lingo/F/LingoAdmin/LingoAdminCirlcle/LingoAdminCircle";

export default function AdminCirclePage() {
  return(<>
    <Head>
      <title>Lingo Admin</title>
      <meta name="description" content="Lingo" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <LingoAdminCircle />
  </>)
}