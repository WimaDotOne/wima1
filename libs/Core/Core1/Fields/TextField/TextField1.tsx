import cl from "./TextField1.module.scss"

interface ITextField1Prop {
  prompt?: string
  value?: string
  onChange: (newValue: string)=>void
  maxLength: number,
  ghost?: string
}
export function TextField1({
  prompt,
  value,
  onChange,
  maxLength,
  ghost
}:ITextField1Prop) {
  return(<>
    <div>
      {
        prompt ?
        <div className={cl.prompt}>{prompt}</div>:null
      }
      <input className={cl.input} 
        placeholder={ghost}
        value={value} 
        onChange={(e)=>onChange(e.target.value)}
        maxLength={maxLength}/>
    </div>
  </>)
}