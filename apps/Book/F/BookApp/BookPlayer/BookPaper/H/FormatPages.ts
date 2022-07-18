
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
      yMax: pageYMax
    }
  }

  const lines = text.split('\n')
  const pages = []
  let pageInfo = newPage()
  let lineCount = lines.length
  
  for(let ln=0; ln<lineCount; ln++) {

    const words = lines[ln].trim().split(" ")
    const wordCount = words.length
    
    if (ln>0) {
      if (!Write(pageInfo,'#newline')) {
        pages.push(pageInfo.text)
        pageInfo = newPage()
      }
      Write(pageInfo,'#newline')
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


function Write(pageInfo: IPageInfo, word: string) {
  
  if (word === '#newline') {
    if (pageInfo.y < pageInfo.yMax) {
      pageInfo.text = pageInfo.text + '\n'
      pageInfo.y = pageInfo.y + 1
      pageInfo.x = 0
      return true;
    } else {
      return false
    }
  }
  if (word === '#indent') {
    pageInfo.text = pageInfo.text + "<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>"
    pageInfo.x = pageInfo.x + 4
    return true
  }
  const len = WordWidth(word)
  if (pageInfo.x + 1 + len <= pageInfo.xMax) {
    pageInfo.text = pageInfo.text + " " + word
    pageInfo.x = pageInfo.x + 1 + len
    
    return true
  } else {
    if (pageInfo.y < pageInfo.yMax) {
      pageInfo.text = pageInfo.text + " " + word
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