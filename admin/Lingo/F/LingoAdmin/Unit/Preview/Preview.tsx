import { IUnit } from "../../../Model/IUnit"

interface IPreviewProp {
  unit: IUnit
  backToUnitHome: ()=>void
}
export function Preview({
  unit,
  backToUnitHome
}: IPreviewProp) {
  return(<>
  Lingo Player
    {/* <MovicPlayer2 unitId={unit._id}
      onStop={backToUnitHome}/> */}
  </>)
}