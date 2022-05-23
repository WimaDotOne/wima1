
export function OrderImageFilesByName(imageFiles) {
  const dict = {}
  const names = []
  for(const image of imageFiles) {
    const name = image.name.toLowerCase()
    if(name) {
      if(!dict[name]) {
        dict[name] = []
        names.push(name)
      }
      dict[name].push(image)
    }
  }
  names.sort(CompareFileName)
  
  const newImageFiles = []
  for(const name of names) {
    const arr = dict[name]
    if(arr && arr.length) {
      for(const img of arr) {
        newImageFiles.push(img)
      }
    } else  {
    }

  }
  return newImageFiles
}

function CompareFileName(A, B) {
  if (A < B) return -1
  if (A === B) return 0
  return 1
}