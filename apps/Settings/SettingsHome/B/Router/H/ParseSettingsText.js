
export function ParseSettingsText(text) {
  const lines = (text || "").split("\n")
  const data = []

  for(let i=0; i<lines.length; i++) {
    const line = (lines[i] || "").trim()
    if(!line) continue
    const settingInfo = line.split("|")
    const name = (settingInfo[0] || "").trim()
    const icon = (settingInfo[1] || "").trim()
    const route = (settingInfo[2] || "").trim()
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