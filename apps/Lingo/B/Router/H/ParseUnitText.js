
export function ParseUnitText(data, isChinese) {
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
    const word = (wordInfo[0] || "").trim()
    const translate = (wordInfo[1] || "").trim()
    const illustration = (wordInfo[2] || "").trim()
    
    
    if(isChinese) {
      const pinYin = (wordInfo[3] || "").trim()
      page.push({
        word, translate, illustration, pinYin
      })
    } else {
      page.push({
        word, translate, illustration
      })
    }

    if(page.length === 1) {
      json.push(page)
    }
  }

  return json
}