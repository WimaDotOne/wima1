import cl from "./ImageFile.module.scss"

interface IImageFileProp {
  url: string
  fileName: string
}
export function ImageFile({
  url,
  fileName
}: IImageFileProp) {

  const imageStyle = {
    backgroundImage: `url(${url})`
  }
  return(<>
    <div className={cl.imageFile}>
      <div className={cl.checkMarkDiv}>
        
      </div>
      <div className={cl.image} style={imageStyle}>

      </div>
      <div className={cl.fileName}>
        {fileName}
      </div>
    </div>
  </>)
}