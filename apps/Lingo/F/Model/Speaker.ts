import { Lang, LangName } from "./Lang";


export class Speaker {
  lang: string = Lang.English
  canSpeak: boolean = true
  synthesis?: SpeechSynthesis
  voice?: SpeechSynthesisVoice
  info: string = ""

  constructor(window: Window, lang?: string) {
  
    if(lang !== undefined) { this.lang = lang }
    this.synthesis = window.speechSynthesis
    if(!this.synthesis) {
      this.info = "This browser cannot speak."
      this.canSpeak = false
      return
    }

    //assume public/.../speech.js is run
    const voices = window.SpeechVoices

    if(!voices || voices.length < 1) {
      this.info = "Fail to load speech voices."
      this.canSpeak = false
      return
    }
    for(let v of voices) {
      if(v.lang === this.lang) {
        this.voice = v
      }
    }
    if(!this.voice) {
      this.info = `This browser does not speak ${LangName(this.lang)}`
      this.canSpeak = false
      return
    }
  }

  Speak(text: string) {
    if(!this.canSpeak) return

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.voice = this.voice!
    this.synthesis!.speak(utterance)
  }
}