import cl from "./Book.module.scss"

interface IBookProp {
  imageUrl: string,
  title: string
  onClick: ()=>void
}

export function Book({
  imageUrl,
  title,
  onClick
}: IBookProp) {
  return(<>
  <div className={cl.case} onClick={onClick}>
    <div className={cl.image} title={title}
       style={{backgroundImage: `url(${imageUrl})`}}>
    </div>
  </div>
  </>)
}