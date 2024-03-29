
export function ParseUnitText(data, isChinese, imageDict) {
  const words = data.split("\n")
  const json = []
  const pageDivider = "==="
  let page = []
  for(let i=0; i<words.length; i++) {
    const w = words[i].trim()
    if(!w) continue

    if(w.includes(pageDivider)) {
      page = []
      continue
    }
    const wordInfo = w.split("|")
    let word = (wordInfo[0] || "").trim()
    const translate = (wordInfo[1] || "").trim()
    const imageName = (wordInfo[2] || "").trim()
    const imageUrl = imageDict[imageName] || ""
    
    if(isChinese) {
      const word2 = word.split("^")
      word = (word2[0] || "").trim()
      const pinYin = (word2[1] || "").trim()

      page.push({
        word, translate, imageUrl, pinYin
      })

    } else {
      page.push({
        word, translate, imageUrl
      })
    }

    if(page.length === 1) {
      json.push(page)
    }
  }

  return json
}