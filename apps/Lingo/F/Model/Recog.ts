import { Alert } from "../../../../libs/Core/Core1/fCore1"
import { Lang } from "./Lang"

declare global {
  interface Window {
    SpeechRecognition: any
    SpeechGrammarList: any
    SpeechRecognitionEvent: any
    webkitSpeechRecognition: any
    webkitSpeechGrammarList: any
    webkitSpeechRecognitionEvent: any
  }
}

export class Recog {
  lang: string = Lang.English
  canRecognize: boolean = true
  recognition: any
  info: string = ""
  isRecording = false

  constructor(window: Window, lang?: string) {
  
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList
    const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent
    
    if(!SpeechRecognition || !SpeechGrammarList || !SpeechRecognitionEvent) {

      this.canRecognize = false
      this.info = "The browser cannot recognize speech"
      return
    }
    if(lang !== undefined) {
      this.lang = lang
    }
    this.recognition = new SpeechRecognition()
    this.recognition.lang = this.lang
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;
  }

  

  Recognize(word: string, 
    onResult:(result: string)=>void,
    onAudioStart?: ()=>void,
    onAudioEnd?: ()=>void
    ) {
    this.recognition.onresult = (e: any) => {
      const result = e.results[0][0].transcript
      if(onResult) { onResult(result) }
    }

    this.recognition.onaudiostart = () => {
      if(onAudioStart) { onAudioStart() }
    }
    
    this.recognition.onaudioend = (e: any) => {
      if(onAudioEnd) { onAudioEnd() }
      this.recognition.stop()
    }

    this.recognition.onerror = (err: any)=> {
      Alert(err.error + " " + err.message)
    }

    const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList
    const grammar = Grammar1(word)
    const grammars = new SpeechGrammarList()
    grammars.addFromString(grammar, 1)
    this.recognition.grammars = grammars
    
    try {
      this.recognition.start()
    } catch(err) {
      //expect crash start is called a second time too soon
    }
  }
}

function Grammar1(word: string) {
  return `#JSGF V1.0; grammar phrase; public <phrase> = ${word};`
}