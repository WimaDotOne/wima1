import { AppleIconButtons, AutoRepeatGrid } from "../../../../../../../../libs/Core/Core2/fCore2"
import { ImageFile } from "../../../../H/Controls/ImageFile/ImageFile"
import { MovicWindowBottomBar } from "../../../../MovicWindow/MovicWindowBottomBar"
import cl from "./ImagesFolder.module.scss"
import { AppleWindowBottomBarFill } from "../../../../../../../../libs/Core/Core2/fCore2"

interface IImagesFolderProp {

}

export function ImagesFolder({

}: IImagesFolderProp) {
  return(<>
    <AutoRepeatGrid autoFill cellMinWidth={100} columnGap={3} rowGap={5} padding={10}>
      <ImageFile url="/favicon.ico" fileName="W1"/>
      <ImageFile url="/apps/Movic/Test/test2.png" fileName="When no one's watching"/>
      <ImageFile url="/apps/Movic/Test/test.png" fileName="Knives Out"/>
      <ImageFile url="/apps/Movic/Test/test3.png" fileName="The Dinner"/>
      <ImageFile url="/apps/Movic/Test/test4.jpg" fileName="The Dinner"/>
      <ImageFile url="/favicon.ico" fileName="W1"/>
      <ImageFile url="/apps/Movic/Test/test2.png" fileName="When no one's watching"/>
      <ImageFile url="/apps/Movic/Test/test.png" fileName="Knives Out"/>
      <ImageFile url="/apps/Movic/Test/test3.png" fileName="The Dinner"/>
      <ImageFile url="/apps/Movic/Test/test4.jpg" fileName="The Dinner"/>
      <ImageFile url="/favicon.ico" fileName="W1"/>
      <ImageFile url="/apps/Movic/Test/test2.png" fileName="When no one's watching"/>
      <ImageFile url="/apps/Movic/Test/test.png" fileName="Knives Out"/>
      <ImageFile url="/apps/Movic/Test/test3.png" fileName="The Dinner"/>
      <ImageFile url="/apps/Movic/Test/test4.jpg" fileName="The Dinner"/>
      <ImageFile url="/favicon.ico" fileName="W1"/>
      <ImageFile url="/apps/Movic/Test/test2.png" fileName="When no one's watching"/>
      <ImageFile url="/apps/Movic/Test/test.png" fileName="Knives Out"/>
      <ImageFile url="/apps/Movic/Test/test3.png" fileName="The Dinner"/>
      <ImageFile url="/apps/Movic/Test/test4.jpg" fileName="The Dinner"/>
      <ImageFile url="/apps/Movic/Test/test.png" fileName="Knives Out"/>
      <ImageFile url="/apps/Movic/Test/test3.png" fileName="The Dinner"/>
      <ImageFile url="/apps/Movic/Test/test4.jpg" fileName="The Dinner"/>
      <ImageFile url="/favicon.ico" fileName="W1"/>
      <ImageFile url="/apps/Movic/Test/test2.png" fileName="When no one's watching"/>
      <ImageFile url="/apps/Movic/Test/test.png" fileName="Knives Out"/>
      <ImageFile url="/apps/Movic/Test/test.png" fileName="Knives Out"/>
      <ImageFile url="/apps/Movic/Test/test3.png" fileName="The Dinner"/>
      <ImageFile url="/apps/Movic/Test/test4.jpg" fileName="The Dinner"/>
      <ImageFile url="/favicon.ico" fileName="W1"/>
      <ImageFile url="/apps/Movic/Test/test2.png" fileName="When no one's watching"/>
      <ImageFile url="/apps/Movic/Test/test.png" fileName="Knives Out"/>
      <ImageFile url="/apps/Movic/Test/test.png" fileName="Knives Out"/>
      <ImageFile url="/apps/Movic/Test/test3.png" fileName="The Dinner"/>
      <ImageFile url="/apps/Movic/Test/test4.jpg" fileName="The Dinner"/>
      <ImageFile url="/favicon.ico" fileName="W1"/>
      <ImageFile url="/apps/Movic/Test/test2.png" fileName="When no one's watching"/>
      <ImageFile url="/apps/Movic/Test/test.png" fileName="Knives Out"/>
    </AutoRepeatGrid>
    <AppleWindowBottomBarFill />
    <MovicWindowBottomBar>
      <AppleIconButtons />
    </MovicWindowBottomBar>
  </>)
}