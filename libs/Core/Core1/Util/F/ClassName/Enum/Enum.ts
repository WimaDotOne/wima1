import { ISelectOption } from "../../../../Fields/SelectField/ISelectOption"

export function EnumText(value: string, options: Array<ISelectOption>) {
  for(const opt of options) {
    if(value === opt.value) {
      return opt.text
    }
  }
  return ""
}