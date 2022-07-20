export function ParseBookExhibit(text) {
  text = text || ""
  const arr = text.split("===")
  const bookText = (arr[0] || "").trim()
  const chapterNameText = (arr[1] || "").trim()
  const bookArr = bookText.split("|")
  let chapterNameArr = chapterNameText.split("\n")
  chapterNameArr = chapterNameArr.filter((name)=> (name || "").trim())

  const imageFile =  (bookArr[3] || "").trim()
  const coverImgUrl = imageFile ? "/apps/Book/Exhibit/BookCovers/" + imageFile : ""
  
  const book = {
    title: bookArr[0],
    author: bookArr[1],
    dedication: bookArr[2],
    coverImgUrl
  }
  const chapters = []
  for(let i=0; i<chapterNameArr.length; i++) {
    chapters.push({
      id: i+1,
      name: chapterNameArr[i]
    })
  }
  return [book, chapters]
}