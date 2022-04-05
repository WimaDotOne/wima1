
function DeDuplicate(array) {
  const newArray = []
  const map = new Map()
  for(const value of array) {
    if(value && !map.has(value)) {
      newArray.push(value)
      map.set(value, 1)
    }
  }
  return newArray
}

export {
  DeDuplicate
}