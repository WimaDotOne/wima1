import cl from "./ChapterPaperB.module.scss"

interface IChapterPaperBProp {
  prevChapter: (cb?:(chapterText: string)=>void)=>void
  nextChapter: (cb?:()=>void)=>void
  chapterIndex: number
  chapterText: string
  chapterName: string
}

export function ChapterPaperB({
  prevChapter, nextChapter,
  chapterIndex,
  chapterText,
  chapterName
}: IChapterPaperBProp) {
  return(<>
  Chapter Paper B
  </>)
}