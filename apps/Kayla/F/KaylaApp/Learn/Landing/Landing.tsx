import { KaylaWindow } from "../../KaylaWindow/KaylaWindow"
import cl from "./Landing.module.scss"

interface ILandingProp {
  goBook: (index: number)=>void
}

export function Landing({
  goBook
}: ILandingProp) {
  return(<>
  <KaylaWindow>
  <div className={cl.landing}>
    <div className={cl.year} onClick={()=>{goBook(0)}}>2023</div>
    <div className={cl.year} onClick={()=>{goBook(1)}}>2022</div>
  </div>
  </KaylaWindow>
  </>)
}