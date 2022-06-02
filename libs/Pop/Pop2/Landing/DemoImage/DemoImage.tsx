import cl from "./DemoImage.module.scss"

interface IDemoImageProp {
  url: string
}
export function DemoImage({
  url
}: IDemoImageProp) {
  return(<>
  <div className={cl.imageSpace}>
    <div className={cl.image} 
      style={{backgroundImage: `url(${url})`}}/>
  </div>
  </>)
}