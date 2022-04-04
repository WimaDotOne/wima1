import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ShieldProvider } from '../libs/Core/fCore'


function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <ShieldProvider>
      <Component {...pageProps} />
    </ShieldProvider>
  </>)
}

export default MyApp
