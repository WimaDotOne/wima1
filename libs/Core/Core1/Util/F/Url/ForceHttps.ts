
function BeginWith(text: string, begin: string, ignoreCase: boolean) {
  if(!text || !begin) return false
  const len = begin.length
  const subText = text.substring(0, len)
  if(ignoreCase) {
    return subText.toLowerCase() === begin.toLowerCase()
  }
  return subText === begin
}

export function ForceHttps(domains: Array<string>) {
  if(!window || !window.location) return
  if(!domains || domains.length < 1) return
  const href = window.location.href
  if(!href) return
  if(BeginWith(href, "https://", true)) return //already https
  if(!BeginWith(href, "http://", true)) return //should be http://
  for(const domain of domains) {
    if(BeginWith(href, domain, true)) {
      const partUrl = href.substring("http://".length)
      window.location.href = "https://" + partUrl
    }
  }
}