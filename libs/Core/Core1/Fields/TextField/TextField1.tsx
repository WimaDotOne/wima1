import cl from "./TextField1.module.scss"

interface ITextField1Prop {
  prompt?: string
  value?: string
  onChange: (newValue: string)=>void
  maxLength: number
}
export function TextField1({
  prompt,
  value,
  onChange,
  maxLength
}:ITextField1Prop) {
  return(<>
    <div>
      {
        prompt ?
        <div className={cl.prompt}>{prompt}</div>:null
      }
      <input className={cl.input} value={value} onChange={(e)=>onChange(e.target.value)}
        maxLength={maxLength}/>
    </div>
  </>)
}