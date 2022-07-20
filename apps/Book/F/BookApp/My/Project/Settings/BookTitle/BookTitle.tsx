import { useEffect, useState } from "react"
import { Get2, Post2, useShield } from "../../../../../../../../libs/Core/Core1/fCore1"
import { ReadEdit } from "../../../../../../../../libs/Pop/Pop1/fPop1"
import { BookColor } from "../../../../../CSS/BookColor"
import { IProject } from "../../../../../Model/IProject"
import { EditBookTitle } from "./EditBookTitle/EditBookTitle"
import { ViewBookTitle } from "./ViewBookTitle/ViewBookTitle"

interface IBookTitleProp {
  project: IProject
  setProjectBookTitle: (bookTitle: string)=>void
}
export function BookTitle({
  project,
  setProjectBookTitle
}: IBookTitleProp) {

  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [title, setTitle] = useState<string>("")
  const [author, setAuthor] = useState<string>("")
  const [dedication, setDedication] = useState<string>("")
  const [loaded, setLoaded] = useState<boolean>(false)

  const shield = useShield()

  async function loadBookTitle(onOk?:(res:any)=>void) {
    await Get2(shield, `/book/LoadSettingsBookTitle?projectId=${project.id}`,
      onOk
    )
  }

  async function saveBookTitle(onOk?:(res:any)=>void) {
    await Post2(shield, "/book/SaveSettingsBookTitle",
      {
        projectId: project.id,
        title,
        author,
        dedication
      }, onOk
    )
  }

  function onCancel() {
    loadBookTitle((res)=>{
      setTitle(res.bookTitle)
      setAuthor(res.author)
      setDedication(res.dedication)
      setIsEdit(false)
    })
  }

  async function onSave() {
    saveBookTitle((res)=>{
      setTitle(res.bookTitle)
      setProjectBookTitle(res.bookTitle)
      setIsEdit(false)
    })
  }

  useEffect(()=>{
    if(loaded) return
    loadBookTitle((res)=>{
      setLoaded(true)
      setTitle(res.bookTitle)
      setAuthor(res.author)
      setDedication(res.dedication)
    })
  })

  return(<>
    <ReadEdit title="Book" isEdit={isEdit}
      setIsEdit={setIsEdit}
      onCancel={onCancel}
      onSave={onSave}
      color={BookColor.themeGreen}
    >
    {
      isEdit ? 
      <EditBookTitle title={title} setTitle={setTitle}
        author={author} setAuthor={setAuthor}
        dedication={dedication} setDedication={setDedication}
      />:
      <ViewBookTitle title={title} author={author}
        dedication={dedication}/>
    }
    </ReadEdit>
  </>)
}