import { Alert, AlertSysError } from "./Alert"
import { bConfig } from "../../../../bConfig"

function Domain() {
  if(process.env.NODE_ENV === "development") {
    return "http://localhost:5001"+bConfig.bRoute1
  } else {
    //when next js is build
    return bConfig.bRoute1
  }
}

export function Post(route: string, body: any) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }
  return (
    fetch(Domain()+route, options)
    .then(res => res.json())
  )
}

export function Get(route: string) {
  const options = {
    method: 'GET'
  }

  return (
    fetch(Domain()+route, options)
    .then(res => res.json())
  )
}


export async function Post2(
  shield: (show:boolean)=>void, 
  route: string, body: any, 
  onOk?:(res: any)=>void,
  onNotOk?:(res: any)=>void
)
{
  try {
    shield(true)
    const res = await Post(route, body)
    if(res.ok) {
      if(onOk) { onOk(res) }
    } else {
      if(onNotOk) {
        onNotOk(res)
      } else {
        Alert(res.error)
      }
    }
    shield(false)
  } catch (err) {
    shield(false)
    AlertSysError(err)
  }
}

export async function Get2(
  shield: (show:boolean)=>void, 
  route: string, 
  onOk?:(res: any)=>void,
  onNotOk?:(res: any)=>void
)
{
  try {
    shield(true)
    const res = await Get(route)
    if(res.ok) {
      if(onOk) { onOk(res) }
    } else {
      if(onNotOk) {
        onNotOk(res)
      } else {
        Alert(res.error)
      }
    }
    shield(false)
  } catch (err) {
    shield(false)
    AlertSysError(err)
  }
}