export function TransparentColor(alpha: number, color?: string): string {
  if(!color) return ""
  color = color.toLowerCase()

  if(color.includes("(")) {
    const x = color.split("(")
    const y = x[1].split(")")
    const z = (y[0] || "").split(",")
    const r = z[0]
    const g = z[1]
    const b = z[2]
    return `rgba(${r},${g},${b},${alpha})`
  }
  if(color.includes("#") && color.length === 7) {
    return color+HexAlpha(alpha)
  }

  return color
}

function HexAlpha(alpha: number) {
  if(alpha>1) alpha = 1
  if(alpha<0) alpha = 0

  const num = Math.round(255*alpha)
  return num.toString(16)
}