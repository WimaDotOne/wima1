import cl from "./Dvd.module.scss"

interface IDvdProp {
  imageUrl: string,
  title: string
  onClick: ()=>void
}

export function Dvd({
  imageUrl,
  title,
  onClick
}: IDvdProp) {
  return(<>
  <div className={cl.case} onClick={onClick}>
    <div className={cl.image} title={title}
       style={{backgroundImage: `url(${imageUrl})`}}>
    </div>
  </div>
  </>)
}