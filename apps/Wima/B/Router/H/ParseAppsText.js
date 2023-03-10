
export function ParseAppsText(text) {
  const lines = (text || "").split("\n")
  const promoApps = []
  const otherApps = []
  const data = [promoApps, otherApps]

  for(let i=0; i<lines.length; i++) {
    const line = (lines[i] || "").trim()
    if(!line) continue
    const appInfo = line.split("|")
    const name = (appInfo[0] || "").trim()
    const icon = (appInfo[1] || "").trim()
    const route = (appInfo[2] || "").trim()
    const promo = (appInfo[3] || "").trim() === "*"
    if(name) {
      const app = {
        name,
        icon,
        route
      }
      if(promo) {
        promoApps.push(app)
      } else {
        otherApps.push(app)
      }
    }
  }

  return data
}