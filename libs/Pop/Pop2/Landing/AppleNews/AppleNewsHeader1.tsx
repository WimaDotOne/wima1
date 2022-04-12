import cl from "./AppleNewsHeader1.module.scss"

interface IAppleNewsHeader1Prop {
  text1: string
  text2: string
}
export function AppleNewsHeader1({
  text1,
  text2
}: IAppleNewsHeader1Prop) {
  return(<>
    <div className={cl.header}>
      <div className={cl.text1}>{text1}</div>
      <div className={cl.text2}>{text2}</div>
    </div>
  </>)
}