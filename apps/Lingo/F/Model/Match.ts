
export function IsMatch(text1: string, text2: string) {
  if(!text1 || !text2) return false
  text1 = text1.trim().toLowerCase()
  text2 = text2.trim().toLowerCase()
  if(!text1 || !text2) return false

  text1 = ReplaceChar(text1)
  text2 = ReplaceChar(text2)

  if(text1 === text2) return true

  return false
}

function ReplaceChar(text: string) {

  text = text.split(".").join("")
  text = text.split(",").join("")
  text = text.split("!").join("")
  text = text.split("?").join("")
  text = text.split("'").join("")

  text = text.split(" ").join("")
  
  text = text.split("ä").join("a")
  text = text.split("ö").join("o")
  text = text.split("ü").join("u")


  return text
}