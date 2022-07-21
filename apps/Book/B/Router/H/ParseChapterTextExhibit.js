export function ParseChapterTextExhibit(text) {
  text = text || ""
  const arr = text.split("===")
  const chapterName = (arr[0] || "").trim()
  const chapterText = (arr[1] || "").trim()
  
  return {
    chapterName, chapterText
  }
}