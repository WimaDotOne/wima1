
function HtmlEncode(value) {
  if(!value) return ""
  return value.replace(/[\u00A0-\u9999<>&]/g, c=>"&#"+c.charCodeAt(0)+";")
}

export { HtmlEncode }