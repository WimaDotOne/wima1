import cl from "./Contact.module.scss"

interface IContactProp {
  email: string
}
export function Contact({
  email
}:IContactProp) {
  return(<>
    <div className={cl.contactWrap}>
      <div className={cl.layer1}>
        <div className={cl.floor}></div>
      </div>
      <div className={cl.layer2}>
        <div className={cl.email}>{email}</div>
      </div>
    </div>
  </>)
}