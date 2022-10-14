import cl from "./TipHeader.module.scss"

interface ITipHeaderProp {
  text1: string
  text2: string
  imageUrl: string
}

export function TipHeader({
  text1,
  text2,
  imageUrl
}: ITipHeaderProp) {
  return(<>
  <div className={cl.header}>
    <div className={cl.imageDiv} 
      style={{backgroundImage: `url(${imageUrl})`}}
    />
    <div className={cl.textDiv}>
      <div className={cl.text1}>{text1}</div>
      <div className={cl.text2}>{text2}</div>
    </div>  
  </div>
  </>)
}