import cl from "./TextArea1.module.scss"

interface ITextArea1Prop {
  prompt?: string
  value?: string
  onChange: (newValue: string)=>void
  maxLength: number,
  rows?: number
}
export function TextArea1({
  prompt,
  value,
  onChange,
  maxLength,
  rows
}: ITextArea1Prop) {

  rows = rows || 3

  return(<>
  <div>
    {
      prompt ?
      <div className={cl.prompt}>{prompt}</div>:null
    }
    <textarea className={cl.textarea} value={value} onChange={(e)=>onChange(e.target.value)}
      maxLength={maxLength} rows={rows}/>
  </div>
  </>)
}