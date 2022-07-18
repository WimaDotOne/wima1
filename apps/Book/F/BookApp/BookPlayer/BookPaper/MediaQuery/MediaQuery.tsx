import { useEffect } from "react"

interface IMediaQueryProp {
  setIsWideScreen: (isWideScreen: boolean)=>void
}

export function MediaQuery({
  setIsWideScreen
}: IMediaQueryProp) {

  useEffect(()=>{
    if(!window) return
    
    function Adjust(mediaQuery: any) {
      if(mediaQuery.matches) {
        setIsWideScreen(true)
      } else {
        setIsWideScreen(false)
      }
    }
    
    const mediaQuery = window.matchMedia(`(min-width: 1000px)`)
    Adjust(mediaQuery)
    mediaQuery.addEventListener("change" , (e)=>{
      if(e.target) {
        Adjust(e.target)
      }
    })
  }, [])

  return(<>
  
  </>)
}