
export function IsMatch(word: string, text: string, pinYin?: string) {
  word = (word || "").trim().toLowerCase()
  pinYin = (pinYin || "").trim().toLowerCase()
  text = (text || "").trim().toLowerCase()
  
  if(!word && !pinYin) return false
  if(!text) return false

  word = ReplaceChar(word)
  if(pinYin) {
    pinYin = ReplaceChar(pinYin)
  }
  text = ReplaceChar(text)

  if(word === text) return true
  if(pinYin === text) return true
  return false
}

function ReplaceChar(text: string) {

  text = text.split(".").join("")
  text = text.split(",").join("")
  text = text.split("!").join("")
  text = text.split("¡").join("")
  
  text = text.split("?").join("")
  text = text.split("'").join("")
  text = text.split("⋯").join("")
  text = text.split("？").join("")
  text = text.split("，").join("")
  text = text.split("。").join("")

  text = text.split(" ").join("")
   
  text = text.split("ñ").join("n")

  text = text.split("ä").join("a")
  text = text.split("ö").join("o")
  text = text.split("ü").join("u")

  text = text.split("ā").join("a")
  text = text.split("á").join("a")
  text = text.split("ǎ").join("a")
  text = text.split("à").join("a")
  
  text = text.split("ē").join("e")
  text = text.split("é").join("e")
  text = text.split("ě").join("e")
  text = text.split("è").join("e")

  text = text.split("ō").join("o")
  text = text.split("ó").join("o")
  text = text.split("ǒ").join("o")
  text = text.split("ò").join("o")

  text = text.split("ī").join("i")
  text = text.split("í").join("i")
  text = text.split("ǐ").join("i")
  text = text.split("ì").join("i")

  text = text.split("ū").join("u")
  text = text.split("ú").join("u")
  text = text.split("ǔ").join("u")
  text = text.split("ù").join("u")

  text = text.split("ǖ").join("v")
  text = text.split("ǘ").join("v")
  text = text.split("ǚ").join("v")
  text = text.split("ǜ").join("v")
  
  return text
}