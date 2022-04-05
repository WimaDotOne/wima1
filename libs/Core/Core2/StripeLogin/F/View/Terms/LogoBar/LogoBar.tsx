import cl from "./LogoBar.module.scss"

interface ILogoBar {
  logo: string
  onClick?: ()=>void
}
export function LogoBar({
  logo, onClick
}: ILogoBar) {
  const clClick = onClick ? cl.click : ""
  return(<>
    <div className={cl.logoBar}>
      <span onClick={onClick} className={clClick}>{logo}</span>
    </div>
  </>)
}