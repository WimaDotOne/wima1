import { LimitWidth } from "../../../../../../libs/Core/Core2/fCore2"
import { AppleNewsHeader1 } from "../../../../../../libs/Pop/Pop2/Landing/AppleNews/AppleNewsHeader1"
import { MovicWindow } from "../../H/MovicWindow/MovicWindow"
import cl from "./About.module.scss"

export function About() {
  return(<>
    <MovicWindow>
      <LimitWidth maxWidth={800}>
        <AppleNewsHeader1 text1="Movic" text2="If we were a movie" />
      </LimitWidth>
    </MovicWindow>
  </>)
}