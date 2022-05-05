import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ShieldProvider } from '../libs/Core/Core1/fCore1'
import { AppleWindowContext } from '../libs/Core/Core2/AppleWindow/fAppleWindow'
import { WimaUserContext } from '../apps/Wima/fWima'
import { WimaEnvContext } from '../apps/Wima/F/WimaEnv/WimaEnvContext'


function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <WimaEnvContext>
    <WimaUserContext>
    <AppleWindowContext>
    <ShieldProvider>
      <Component {...pageProps} />
    </ShieldProvider>
    </AppleWindowContext>
    </WimaUserContext>
    </WimaEnvContext>
  </>)
}

export default MyApp
