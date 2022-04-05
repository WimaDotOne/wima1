export function Alert(message: string) {
  setTimeout(()=>{
    alert(message)
  },0)
}

export function AlertSysError(err: any) {
  let message = ""
  if (typeof err === 'string') {
    message = err
  } else if(err && err.message) {
    message = err.message
  }
  if(message) {
    message = "\n\nTechnically: "+message
  }
  Alert("Oops, we got an error."+message)
}