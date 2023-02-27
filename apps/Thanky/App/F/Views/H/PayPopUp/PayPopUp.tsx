import cl from "./PayPopUp.module.scss"
import { PopUp } from "../../../../../../../libs/Pop/Pop1/PopUp/PopUp"
import { useState } from "react"

interface IPayPopUpProp {
  show: boolean
  setShow: (show: boolean)=>void
}

export function PayPopUp({
  show,
  setShow
}: IPayPopUpProp) {

  return(<>
  <PopUp show={show} setShow={setShow}>

  </PopUp>
  </>)
}