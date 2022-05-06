import cl from "./FileNameBar.module.scss"

interface IFileNameBarProp {
  fileName: string
}
export function FileNameBar({
  fileName
}: IFileNameBarProp) {
  return(<>
    <div className={cl.fileNameBar}>
      <div className={cl.fileNameBarInner}>
      {fileName}
      </div>
    </div>
  </>)
}