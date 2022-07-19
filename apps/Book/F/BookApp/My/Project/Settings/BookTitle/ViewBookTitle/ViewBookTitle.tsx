import { TextCell } from "../../../../../../../../../libs/Pop/Pop1/ReadEdit/TextCell"
import cl from "./ViewBookTitle.module.scss"

interface IViewBookTitleProp {
  title: string
  author?: string
  dedication?: string
}
export function ViewBookTitle({
  title,
  author,
  dedication
}:IViewBookTitleProp) {
  return(<>
    <div className={cl.info}>
      <TextCell prompt="Title" value={title} />
      <TextCell prompt="Author" value={author} />
      <TextCell prompt="Dedication" value={dedication} />
    </div>
  </>)
}