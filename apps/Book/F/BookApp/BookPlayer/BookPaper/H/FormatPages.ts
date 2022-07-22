
interface IPageInfo {
  x: number
  y: number
  text: string
  xMax: number
  yMax: number
}

export function FormatPagesA(text: string, pageXMax: number, pageYMax: number) {

  function newPage() {
    return {
      x: 0,
      y: 1,
      text: "",
      xMax: pageXMax,
      yMax: pageYMax,
      lineBegin: true
    }
  }
  text = text || ""
  const lines = text.split('\n')
  const pages = []
  let pageInfo = newPage()
  let lineCount = lines.length
  
  for(let ln=0; ln<lineCount; ln++) {
    const line = lines[ln]
 
    if(!line || !line.trim()) continue
    const words = line.trim().split(" ")

    const wordCount = words.length
    
    if (ln>0) {

      if (HasRoomForNewLine(pageInfo)) {
        Write(pageInfo,'#newline')
      } else {
        pages.push(pageInfo.text)
        pageInfo = newPage()
      }
    }
    
    for(let w=0; w<wordCount; w++) {
      let word = words[w]
      if (ln===0 && w < 3) {
        word = word.toUpperCase()
      }
      if (!Write(pageInfo, word)){
        pages.push(pageInfo.text)
        pageInfo = newPage()
        Write(pageInfo, word)
      }
    }
  }
  pages.push(pageInfo.text)
  return pages
}

function HasRoomForNewLine(pageInfo: IPageInfo) {
  return pageInfo.y + 1 < pageInfo.yMax
}
function Write(pageInfo: IPageInfo, word: string) {
  if (word === '#newline') {
    pageInfo.text = pageInfo.text + '\n\n'
    pageInfo.y = pageInfo.y + 2
    pageInfo.x = 0
    return true
  }

  const len = WordWidth(word)
  if (pageInfo.x + 1 + len <= pageInfo.xMax) {
    pageInfo.text = pageInfo.x < 1 ? pageInfo.text + word : pageInfo.text + " " + word
    pageInfo.x = pageInfo.x + 1 + len
    
    return true
  } else {
    if (pageInfo.y < pageInfo.yMax) {
      pageInfo.text = pageInfo.x < 1 ? pageInfo.text + word : pageInfo.text + " " + word
      pageInfo.x = len
      pageInfo.y = pageInfo.y + 1
      return true
    } else  {
      return false
    }
  }
}

function WordWidth(word: string) {
  const charArray = word.split("")
  let len = 0
  for(const c of charArray) {
    if (
      c===',' || 
      c==="'" ||
      c==='.' ||
      c==='l' ||
      c==='f' ||
      c==='t' ||
      c==='i')
    {
      len = len + 0.5
    } else {
      len = len + 1
    }
  }

  return len
}