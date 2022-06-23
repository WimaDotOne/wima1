export function TextDate1(dateString?: string) {
  if(!dateString) return ""
  const d = new Date(dateString)
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