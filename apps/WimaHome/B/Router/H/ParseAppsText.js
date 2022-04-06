
export function ParseAppsText(text) {
  const lines = (text || "").split("\n")
  const data = []

  for(let i=0; i<lines.length; i++) {
    const line = (lines[i] || "").trim()
    if(!line) continue
    const appInfo = line.split("|")
    const name = (appInfo[0] || "").trim()
    const icon = (appInfo[1] || "").trim()
    const route = (appInfo[2] || "").trim()
    if(name) {
      data.push({
        name, 
        icon,
        route
      })
    }
  }

  return data
}