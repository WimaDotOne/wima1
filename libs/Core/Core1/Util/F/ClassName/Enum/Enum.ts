import { ISelectOption } from "../../../../Fields/SelectField/ISelectOption"

export function EnumText(value?: string, options?: Array<ISelectOption>) {
  if(!value) return ""
  if(!options) return ""
  for(const opt of options) {
    if(value === opt.value) {
      return opt.text
    }
  }
  return ""
}