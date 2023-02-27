function TextDate(d: Date) {
  const year = d.getFullYear()
  const m = d.getMonth()
  const monthName = MonthNames[m]
  const date = d.getDate()
  if(isNaN(year)) return ""
  if(!monthName) return ""
  return monthName + " "+date+", "+year
}

const MonthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct","Nov", "Dec"
]

export function TextDate1(dateString?: string) {
  if(!dateString) return ""
  const d = new Date(dateString)
  return TextDate(d)
}

export function TextDate2(utc?: number) {
  if(!utc) return ""
  const d = new Date(utc)
  return TextDate(d)
}



