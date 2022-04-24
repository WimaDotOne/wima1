import { useEffect, useRef } from "react"
import cl from "./TextEditor.module.scss"
//https://medium.com/weekly-webtips/enable-line-numbering-to-any-html-textarea-35e15ea320e2
interface ITextEditor {
  text: string,
  styleHeight: string
}

export function TextEditor({
  text,
  styleHeight
}: ITextEditor) {

  const lineCounterRef = useRef<HTMLTextAreaElement>(null)
  const codeEditorRef = useRef<HTMLTextAreaElement>(null)

  useEffect(()=>{
    const lineCounter = lineCounterRef.current
    const codeEditor = codeEditorRef.current
    if(!lineCounter || !codeEditor) return

    const aaa = "aaa"
    if(!codeEditor.classList.contains(aaa)) {
      codeEditor.classList.add(aaa)
      codeEditor.addEventListener("scroll", ()=>{
        lineCounter.scrollTop = codeEditor.scrollTop
      })
      codeEditor.addEventListener("input", ()=>{

        const lineCount = codeEditor.value.split('\n').length;
        const outarr = new Array();
        for (var x = 0; x < lineCount; x++) {
          outarr[x] = (x + 1)
        }
        lineCounter.value = outarr.join('\n');
        lineCounter.scrollTop = codeEditor.scrollTop
      })

      codeEditor.addEventListener('keydown', (e) => {
      
        let { key } = e
        let { value, selectionStart, selectionEnd } = codeEditor
        if (key === "Tab") {
           e.preventDefault();
          codeEditor.value = value.slice(0, selectionStart) + '  '+value.slice(selectionEnd);
          codeEditor.setSelectionRange(selectionStart+2, selectionStart+2)
        }
  });
    }
  
  })

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
        style={textareaStyle}></textarea>
    </div>
  </>)
}