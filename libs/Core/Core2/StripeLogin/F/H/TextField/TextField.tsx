import cl from "./TextField.module.scss"

interface ITextField {
  prompt: string
  value: string
  onChange: (newValue: string)=>void
  maxLength: number
}
export function TextField({
  prompt,
  value,
  onChange,
  maxLength
}:ITextField) {
  return(<>
    <div>
      <div className={cl.prompt}>{prompt}</div>
      <input className={cl.input} value={value} onChange={(e)=>onChange(e.target.value)}
        maxLength={maxLength}/>
    </div>
  </>)
}