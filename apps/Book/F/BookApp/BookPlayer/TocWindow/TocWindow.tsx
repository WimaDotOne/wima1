import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react"
import { AppleWindow, GroupModel, ItemModel, MenuModel } from "../../../../../../libs/Core/Core2/fCore2"
import { BookColor } from "../../../CSS/BookColor"
import { IChapter } from "../../../Model/IChapter"

interface ITocWindowProp {
  children: ReactNode
  isLeftBarOpen: boolean
  setIsCover: (isCover: boolean)=>void
  setIsLeftBarOpen: Dispatch<SetStateAction<boolean>>
  setChapterIndex: (chapterIndex: number)=>void
  setPage: (page: number)=>void
  chapters: Array<IChapter>
  onClose: ()=>void
}

export function TocWindow({
  children,
  isLeftBarOpen,
  setIsCover,
  setIsLeftBarOpen,
  setChapterIndex,
  setPage,
  chapters,
  onClose
}: ITocWindowProp) {

  const [viewId, setViewId] = useState<string>("")

  function goToView(viewId: string) {
    setViewId(viewId)
    if(+viewId > 0) {
      setIsCover(false)
      setChapterIndex(+viewId)
      setPage(1)
    }
    
  }

  const bookMenu = BookMenu(chapters)

  useEffect(()=>{
    if(viewId==="Exit" && onClose) {
      onClose()
    }
  })
  return(<>
    <AppleWindow menu={bookMenu} brand="Book"
      isLeftBarOpen={isLeftBarOpen}
      setIsLeftBarOpen={setIsLeftBarOpen}
      viewId={viewId} goToView={goToView}
      nonMovableViewDiv
    >
    { children }
    </AppleWindow>
  </>)
}

function BookMenu(chapters: Array<IChapter>): MenuModel | undefined {
  const exitGroup = new GroupModel("Book", false)
  exitGroup.AddItem(new ItemModel("Exit", "Exit", ""))

  const tocGroup = new GroupModel("Table of Content", false)
  for(let i=1; i<=chapters.length; i++) {
    const chapter = chapters[i-1]
    tocGroup.AddItem(new ItemModel(i+"", `§${i}. ${chapter.name}`, ""))
  }
  
  const menu = new MenuModel("", BookColor.themeGreen)
  menu.AddGroup(exitGroup)
  menu.AddGroup(tocGroup)
  return menu
}
