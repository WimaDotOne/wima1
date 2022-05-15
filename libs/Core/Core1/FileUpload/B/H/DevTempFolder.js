
export function DevTempFolder() {
  if(process.env.DEV_TEMP_FOLDER) {
    return process.env.DEV_TEMP_FOLDER
  }
  return ""
}