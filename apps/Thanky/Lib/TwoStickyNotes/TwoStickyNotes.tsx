import { StickyNote } from "./StickyNote/StickyNote"
import cl from "./TwoStickyNotes.module.scss"

interface ITwoStickyNotesProp {
  title1: string
  text1: string
  title2?: string
  text2?: string
}

export function TwoStickyNotes({
  title1,
  text1,
  title2,
  text2
}: ITwoStickyNotesProp) {
  return(<>
  <div className={cl.stickyNotesSpace}>
    <div className={cl.stickNotesSpaceInner}>
      <div className={cl.noteSpace}>
        <StickyNote title={title1} text={text1} />
      </div>
      {
        text2? 
        <div className={cl.noteSpace}>
          <StickyNote title={title2 || ""}
            text={text2} />
        </div>: null
      }
    </div>
  </div>
  </>)
}