import cl from "./SectionHeader.module.scss"

interface ISectionHeaderProp {
  text: string
}
export function SectionHeader({
  text
}: ISectionHeaderProp) {
  return(<>
    <div className={cl.sectionHeader}>
      {text}
    </div>
  </>)
}

interface ISubSectionHeaderProp {
  text: string
}
export function SubSectionHeader({
  text
}: ISubSectionHeaderProp) {
  return(<>
    <div className={cl.subSectionHeader}>
      {text}
    </div>
  </>)
}