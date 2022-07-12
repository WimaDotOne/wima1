import { Dispatch, ReactNode, SetStateAction, useEffect } from "react"
import { AppleWindow, GroupModel, ItemModel, MenuModel } from "../../../../../../libs/Core/Core2/fCore2"
import { BookColor } from "../../../CSS/BookColor"
import { IChapter } from "../../../Model/IChapter"

interface ITocWindowProp {
  children: ReactNode
  isLeftBarOpen: boolean
  setIsLeftBarOpen: Dispatch<SetStateAction<boolean>>
  chapterId: string
  setChapterId: (chapterId: string)=>void
  chapters: Array<IChapter>
  onClose: ()=>void
}
export function TocWindow({
  children,
  isLeftBarOpen,
  setIsLeftBarOpen,
  chapterId,
  setChapterId,
  chapters,
  onClose
}: ITocWindowProp) {

  function goToView(chapterId: string) {
    setChapterId(chapterId)
  }

  const bookMenu = BookMenu(chapters)

  useEffect(()=>{
    if(chapterId==="Exit" && onClose) {
      onClose()
    }
  })
  return(<>
    <AppleWindow menu={bookMenu} brand="Book"
      isLeftBarOpen={isLeftBarOpen}
      setIsLeftBarOpen={setIsLeftBarOpen}
      viewId={chapterId} goToView={goToView}
      nonMovableViewDiv
    >
    { children }
    </AppleWindow>
    
  </>)
}

function BookMenu(chapters: Array<IChapter>): MenuModel | undefined {
  const exitGroup = new GroupModel("Exit", false)
  exitGroup.AddItem(new ItemModel("Exit", "Exit", ""))

  const tocGroup = new GroupModel("Table of Content", false)
  for(let i=1; i<=chapters.length; i++) {
    const chapter = chapters[i-1]
    tocGroup.AddItem(new ItemModel(chapter.id, `§${i}. ${chapter.name}`, "", true))
  }
  
  const menu = new MenuModel("", BookColor.themeGreen)
  menu.AddGroup(exitGroup)
  menu.AddGroup(tocGroup)
  return menu
}
