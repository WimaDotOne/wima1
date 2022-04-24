import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react"
import cl from "./TextEditor.module.scss"

//https://medium.com/weekly-webtips/enable-line-numbering-to-any-html-textarea-35e15ea320e2

interface ITextEditor {
  text: string
  setText: (text: string)=>void
  styleHeight: string
  setHasChange: (hasChange: boolean)=>void
  autoFocus?: boolean
}

export function TextEditor({
  text,
  setText,
  styleHeight,
  setHasChange,
  autoFocus
}: ITextEditor) {

  const [changeRecorded, setChangeRecorded] = useState<boolean>(false)
  const lineCounterRef = useRef<HTMLTextAreaElement>(null)
  const codeEditorRef = useRef<HTMLTextAreaElement>(null)

  useEffect(()=>{
    const lineCounter = lineCounterRef.current
    const codeEditor = codeEditorRef.current
    if(!lineCounter || !codeEditor) return

    if(autoFocus) {
      codeEditor.focus()
    }

    codeEditor.addEventListener("scroll", ()=>{
      lineCounter.scrollTop = codeEditor.scrollTop
    })

  
    const lineCount = codeEditor.value.split('\n').length;
    const arr = []
    for (var x = 0; x < lineCount; x++) {
      arr[x] = (x + 1)
    }
    lineCounter.value = arr.join('\n');
    lineCounter.scrollTop = codeEditor.scrollTop
  })

  function onTextChange(e: ChangeEvent<HTMLTextAreaElement>) {
    if(!changeRecorded) {
      setChangeRecorded(true)
      setHasChange(true)
    }
    setText(e.target.value)
           const codeEditor = codeEditorRef.current
       if(!codeEditor) return
  }
  function onKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    
    let { key } = e
    if (key === "Tab") {
       e.preventDefault();

       const codeEditor = codeEditorRef.current
       if(!codeEditor) return

      let { value, selectionStart, selectionEnd } = codeEditor

      codeEditor.value = value.slice(0, selectionStart) + '  '+value.slice(selectionEnd);
      codeEditor.setSelectionRange(selectionStart+2, selectionStart+2)
    }
  }

  styleHeight = styleHeight || "200px"
  const textareaStyle = {
    //defined height adds directly on <textarea> to make line count scroll precisely with code editor
    height: styleHeight
  }
  return(<>
    <div className={cl.editorWrap}>
      <textarea ref={lineCounterRef} className={cl.lineCounter} readOnly
        style={textareaStyle}></textarea>
      <textarea ref={codeEditorRef} className={cl.codeEditor}
        value={text} onChange={onTextChange} onKeyDown={onKeyDown}
        style={textareaStyle}></textarea>
    </div>
  </>)
}