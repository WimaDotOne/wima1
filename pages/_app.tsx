import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ShieldProvider } from '../libs/Core/Core1/fCore1'


function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <ShieldProvider>
      <Component {...pageProps} />
    </ShieldProvider>
  </>)
}

export default MyApp
