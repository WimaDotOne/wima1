import cl from "./ChapterPaperB.module.scss"

interface IChapterPaperBProp {
  goLastPage: boolean
  prevChapter: ()=>void
  nextChapter: ()=>void
  chapterIndex: number
  chapterText: string
  chapterName: string
}

export function ChapterPaperB({
  goLastPage,
  prevChapter, nextChapter,
  chapterIndex,
  chapterText,
  chapterName
}: IChapterPaperBProp) {
  return(<>
  Chapter Paper B
  </>)
}