import { Unit } from "../../../../../../apps/Lingo/F/LingoApp/Unit/Unit"
import { LanguageEnumCode } from "../../../../Enum/LanguageEnum"
import { IUnit } from "../../../Model/IUnit"

interface IPreviewProp {
  unit: IUnit
  backToUnitHome: ()=>void
}
export function Preview({
  unit,
  backToUnitHome
}: IPreviewProp) {

  const lang = LanguageEnumCode(unit.language)
  return(<>
  <Unit lang2={lang} unitId2={unit._id} 
    goBack={backToUnitHome}
    isAdminPreview
  />
  </>)
}