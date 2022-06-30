
var synthesis = window.speechSynthesis

if(synthesis) {
  window.SpeechVoices = synthesis.getVoices()

  /* getVoices() may return [] the first time it is called, 
    so try to set it again when voices come up later */
  synthesis.onvoiceschanged = function() {
    //onvoicechanged is not reliable in react, so better to run it in vanila javascript
    window.SpeechVoices = synthesis.getVoices()
  }
}
