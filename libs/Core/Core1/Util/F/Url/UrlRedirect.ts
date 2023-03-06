
function BeginWith(text: string, begin: string, ignoreCase: boolean) {
  if(!text || !begin) return false
  const len = begin.length
  const subText = text.substring(0, len)
  if(ignoreCase) {
    return subText.toLowerCase() === begin.toLowerCase()
  }
  return subText === begin
}

function ForceHttps(domains: Array<string>) {
  if(!window || !window.location) return ""
  if(!domains || domains.length < 1) return ""
  const href = window.location.href
  if(!href) return ""
  if(BeginWith(href, "https://", true)) return href //already https
  if(!BeginWith(href, "http://", true)) return "" //should be http://
  for(const domain of domains) {
    if(BeginWith(href, domain, true)) {
      const partUrl = href.substring("http://".length)
      return "https://" + partUrl
    }
  }
  return href
}

export function UrlRedirect(httpDomains: Array<string>, appNames: Array<string>) {
  if(!window || !window.location) return
  let href = window.location.href
  if(!href) return

  let needRedirect = false
  const HttpSlashSlash = "http://"
  if(BeginWith(href, HttpSlashSlash, true)) {
    for(const domain of httpDomains) {
      if(BeginWith(href, domain, true)) {
        const partUrl = href.substring(HttpSlashSlash.length)
        href = "https://" + partUrl
        needRedirect = true
        break
      }
    }
  }

  const parts = href.split("/")

  if(parts.length >= 4) {
    for(const appName of appNames) {
      if(!appName) continue
      //example href = https://wima.one/thanky -> https://wima.one/apps/Thanky
      if((parts[3] || "").toLowerCase() === appName.toLowerCase()) {
        parts[3] = appName
        parts.splice(3,0,"apps") //remove a
        needRedirect = true
        href = parts.join("/")
        break
      }
    }
  } 

  if(needRedirect) {
    window.location.href = href
  }
}