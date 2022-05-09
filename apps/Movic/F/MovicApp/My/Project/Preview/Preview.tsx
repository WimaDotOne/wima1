import { MovicPlayer } from "../../../MovicPlayer/MovicPlayer";

interface IPreviewProp {
  backToProjectHome: ()=>void
}
export function Preview({
  backToProjectHome
}: IPreviewProp) {
  return(<>
    <MovicPlayer onStop={backToProjectHome}/>
  </>)
}