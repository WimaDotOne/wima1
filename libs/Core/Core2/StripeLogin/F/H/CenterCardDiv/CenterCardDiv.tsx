import { ReactNode } from "react"
import cl from "./CenterCardDiv.module.scss"

interface ICenterDivProp {
  brand: string
  children: ReactNode
  onBrand?: ()=>void
  onContact?: ()=>void
  onPrivacy?: ()=>void
  onTerms?: ()=>void
}
export function CenterDiv({
  brand,
  children,
  onBrand,
  onContact,
  onPrivacy,
  onTerms
}: ICenterDivProp) {

  return(<>
    <div className={cl.div0}>
      <div className={cl.centerDiv}>
        <div className={cl.brandDiv}>
          <span className={cl.brand} onClick={onBrand}>{brand}</span>
        </div>
        <div className={cl.card}>
        { children }
        </div>
        <div className={cl.footer}>
        {
          onContact?
          <div className={cl.footLink} onClick={onContact}>
            Contact
          </div>:null
        }
        {
          onPrivacy?
          <div className={cl.footLink} onClick={onPrivacy}>
            Privacy
          </div>:null
        }
        {
          onTerms?
          <div className={cl.footLink} onClick={onTerms}>
            Terms
          </div>:null
        }
        </div>
      </div>
    </div>
  </>)
}