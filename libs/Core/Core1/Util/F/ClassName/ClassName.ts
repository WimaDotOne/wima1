
export function ClassNames(names: string[]): string {
  if(!names) return ""

  if(names.length && names.length > 0) {
    return names.join(" ")
  }

  return ""
}