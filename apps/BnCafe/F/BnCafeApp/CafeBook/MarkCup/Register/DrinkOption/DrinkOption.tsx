import { CheckField1 } from "../../../../../../../../libs/Core/Core1/Fields/CheckField/CheckField1"
import cl from "./DrinkOption.module.scss"

interface IDrinkOptionProp {
  prompt?: string
  checked: boolean
  onChange: (checked: boolean)=>void
  disabled?: boolean
}

export function DrinkOption({
  prompt,
  checked,
  onChange,
  disabled
}: IDrinkOptionProp) {
  return(<>
    <CheckField1 prompt={prompt}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
    />
  </>)
}

