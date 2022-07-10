import cl from "./NumberField1.module.scss"

interface INumberField1Prop {
  prompt?: string
  value?: string
  onChange: (newValue: string)=>void
  maxLength: number
}
export function NumberField1({
  prompt,
  value,
  onChange,
  maxLength
}:INumberField1Prop) {
  return(<>
    <div>
      {
        prompt ?
        <div className={cl.prompt}>{prompt}</div>:null
      }
      <input className={cl.input} value={value} 
        onChange={(e)=>onChange(NumberFilter(e.target.value))}
        maxLength={maxLength}/>
    </div>
  </>)
}

function NumberFilter(value: string) {
  if(!value) return ""
  const len = value.length
  const newCharArr = []
  for(let i=0; i<len; i++) {
    const char = value.charAt(i)
    const charCode = value.charCodeAt(i)
    if(charCode < 48 || charCode > 57) continue  // "0"->48, "9"->57
    newCharArr.push(char)
  }
  return newCharArr.join("")
}