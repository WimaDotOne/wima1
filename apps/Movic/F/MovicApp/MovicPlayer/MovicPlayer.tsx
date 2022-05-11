import { useState } from "react";
import { Div } from "../../../../../libs/Core/Core2/fCore2";
import { NextPageSideBar } from "../../../../../libs/Pop/Pop1/Pagination/NextPageSideBar";
import { MovicControlBar } from "./H/MovicControlBar/MovicControlBar";
import { Scene } from "./H/Scene/Scene";
import cl from "./MovicPlayer.module.scss"

interface IMovicPlayerProp {
  onStop: ()=>void
}

export function MovicPlayer({
  onStop
}: IMovicPlayerProp) {

  const [page, setPage] = useState<number|string>(1)


  return(<>
    <div className={cl.movicPlayer}>
      <div className={cl.screen}>
        <Div height={20} />
        <Scene scene={fakeScene()}/>
        <Div height={40} />
      </div>
      <NextPageSideBar page={page} setPage={setPage} totalPage={9} 
        pedalColor="#444" arrowColor="#333"/>
      <NextPageSideBar page={page} setPage={setPage} prev
        pedalColor="#444" arrowColor="#333"/>
      <MovicControlBar page={page} setPage={setPage} totalPage={9}
        onStop={onStop}
      />
    </div>
  </>)
}

function Url(i: number) {
  return `/apps/Movic/Test/AdventureLand/m${i}.jpg`
}
function fakeScene() {
  return [
    {
      narratives: ["xxx kasjdfkjl dsfjksdfj fj jdflkas jflskj kljfklsdjf sdkjflsjf sdfjlksdfj sdjflj fkasl fjaskldf jskfj klsdjf slfjaslkf jlk flksjf lksdjflas flkjflksjf", "akdjf jf asdjfls jjlksdjsfkls  fjlsjljflj"],
      imageUrls: [Url(1)],
      lines: ["dfja", "adsdf"]
    },
    {
      narratives: ["xxx"],
      imageUrls: [Url(3), Url(2)],
      lines: ["ELLIOTT: Now, I'm going to record this, just to make things easier. All right, we're with Linda Drysdale nee Thrombey. Harlan Thrombey's eldest daughter, and discussing the events that took place the night of his demise one week ago. November 8th.", "adsdf"]
    },
    {
      narratives: ["xxx"],
      imageUrls: [Url(4)],
      lines: ["POLICE: Hey. Excuse me, ma'am. You with the help?", "MEG: Hey! Her name is Marta. She was Grandad's nurse. She's with us."]
    },
    {
      narratives: ["xxx"],
      imageUrls: [Url(5),Url(8),Url(9)],
      lines: ["MARTA: It's okay. I'm sorry.", "MEG: No, it's not okay. What the hell?"]
    },
    {
      narratives: ["xxx"],
      imageUrls: [Url(7)],
      lines: ["MARTA: It's okay. I'm sorry.", "MEG: No, it's not okay. What the hell?"]
    }
  ]
}