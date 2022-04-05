function RandomPasscode(length, allowLetter) {
  let code = ""
  if(!length || length < 4) length = 4

  //avoid using 0O, 1l, 1i, 9q, uv, 6b, 5s, Zz, Xx, Cc
  //don't use upper case to make typing passcode easier
  let chars = ["0","1","2","3","4","5","6","7","8","9"]
  const chars2 = ["1","2","3","4","5","6","7","8","9"]
  if(allowLetter) {
    chars = ["2","3","4","6","7","8","9",
    "a","d","e","f","g","h","k","m","n","r","t","w","y"]
  }

  for(let i=0; i<length; i++) {
    const index = Math.floor(Math.random() * chars.length)
    let char = chars[index]
    if(i===0 && char === "0") {
      //avoid 0 at beginning, which might be confusing to user
      const index2 = Math.floor(Math.random() * chars2.length)
      char = chars2[index2]
    }
    code = code + char
  }
  return code
}

export {
  RandomPasscode
}