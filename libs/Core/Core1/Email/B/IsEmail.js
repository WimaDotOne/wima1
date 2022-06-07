export function IsEmail(value) {
  if(!value) return false

  if(value !== value.trim()) return false
  if(value !== value.toLowerCase()) return false

  const regex = /^[a-zA-Z0-9!#$&_*?^{}~.-]+@([a-zA-Z0-9.-]+)\.[a-zA-Z]+$/
  if(!regex.test(value)) return false
  return true
}