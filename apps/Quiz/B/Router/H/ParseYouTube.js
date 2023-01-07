
export function GetYouTubeId(url) {
  if(!url) return ""

  const shorts = "/shorts/"
  if(url.includes(shorts)) {
    const afterShorts = url.split(shorts)[1] || ""
    const youTubeId2 = afterShorts.split("?")[0]
    return youTubeId2
  }

  const afterV = url.split("v=")[1] || ""
  const youTubeId = afterV.split("&")[0]

  return youTubeId
}