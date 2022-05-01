import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ShieldProvider } from '../libs/Core/Core1/fCore1'
import { AppleWindowContext } from '../libs/Core/Core2/AppleWindow/fAppleWindow'
import { WimaUserContext } from '../apps/WimaHome/fWimaHome'


function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <WimaUserContext>
    <AppleWindowContext>
    <ShieldProvider>
      <Component {...pageProps} />
    </ShieldProvider>
    </AppleWindowContext>
    </WimaUserContext>
  </>)
}

export default MyApp
