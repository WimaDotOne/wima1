
export function ParseAdminAppsText(text) {
  const lines = (text || "").split("\n")
  const adminApps = []

  for(let i=0; i<lines.length; i++) {
    const line = (lines[i] || "").trim()
    if(!line) continue
    const appInfo = line.split("|")
    const name = (appInfo[0] || "").trim()
    const icon = (appInfo[1] || "").trim()
    const route = (appInfo[2] || "").trim()
    if(name) {
      const app = {
        name,
        icon,
        route
      }
      adminApps.push(app)
    }
  }

  return adminApps
}