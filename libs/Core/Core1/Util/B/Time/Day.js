export function NowUtcDay() {
  return Math.round(Date.now()/(24*60*60*1000))
}