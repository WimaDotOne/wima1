import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ShieldProvider } from '../libs/Core/Core1/fCore1'
import { AppleWindowContext } from '../libs/Core/Core2/AppleWindow/fAppleWindow'


function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <AppleWindowContext>
    <ShieldProvider>
      <Component {...pageProps} />
    </ShieldProvider>
    </AppleWindowContext>
  </>)
}

export default MyApp
