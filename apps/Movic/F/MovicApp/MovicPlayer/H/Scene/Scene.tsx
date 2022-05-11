import { IScene } from "../../../../Model/IMoment"
import { Moment } from "../Moment/Moment"
import cl from "./Scene.module.scss"

interface ISceneProp {
  scene: IScene
}
export function Scene({
  scene
}: ISceneProp) {

  scene = scene || []

  return(<>
    <div className={cl.scene}>
    {
      scene.map((moment, i)=>
        <Moment key={"moment"+i} moment={moment} />
      )
    }
    </div>
  </>)
}