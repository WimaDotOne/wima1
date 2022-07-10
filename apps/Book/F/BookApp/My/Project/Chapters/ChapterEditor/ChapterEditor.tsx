import cl from "./ChapterEditor.module.scss"

interface IChapterEditorProp {
  chapterId: string
}

export function ChapterEditor({
  chapterId
}: IChapterEditorProp) {

  return(<>
  Chapter ID { chapterId }
  </>)
}