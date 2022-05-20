
export function ExtractExtension(fileName) {
  if(!fileName) return ""
  const parts = fileName.split(".")
  const len = parts.length
  if(len < 1) return ""
  return parts[len-1].toLowerCase()
}