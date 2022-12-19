
export function GetYouTubeId(url) {
  if(!url) return ""

  const afterV = url.split("v=")[1]
  const youTubeId = afterV.split("&")[0]

  return youTubeId
}