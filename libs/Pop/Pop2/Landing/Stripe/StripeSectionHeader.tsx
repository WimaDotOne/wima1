import cl from "./StripeSectionHeader.module.scss"

interface IStripeSectionHeaderProp {
  text: string
}
export function StripeSectionHeader({
  text
}: IStripeSectionHeaderProp) {
  return(<>
    <div className={cl.sectionHeader}>
      {text}
    </div>
  </>)
}

interface IStripeSubSectionHeaderProp {
  text: string
}
export function StripeSubSectionHeader({
  text
}: IStripeSubSectionHeaderProp) {
  return(<>
    <div className={cl.subSectionHeader}>
      {text}
    </div>
  </>)
}