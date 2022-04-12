import Script from "next/script"

export function GoogleScript() {

  // set window.google
  return(<>
    <Script 
      strategy="beforeInteractive"
      src="https://accounts.google.com/gsi/client"
    />
  </>)
}