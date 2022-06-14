export function IsEnumExit(value, options) {
  if(!value) return false
  for(const opt of options) {
    if(opt.value === value) return true
  }

  return false
}