import Script from "next/script"

export function FacebookScript() {

  // set window.FB
  return(<>
    <Script 
      strategy="beforeInteractive"
      crossOrigin="anonymous" 
      src="https://connect.facebook.net/en_US/sdk.js"
    />
  </>)
}