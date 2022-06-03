import cl from "./DemoImage.module.scss"

interface IDemoImageProp {
  url: string
  height?: number
}
export function DemoImage({
  url,
  height
}: IDemoImageProp) {

  height = height || 300
  return(<>
  <div className={cl.imageSpace}>
    <div className={cl.image} 
      style={{
        backgroundImage: `url(${url})`,
        height: height+"px"
      }}/>
  </div>
  </>)
}