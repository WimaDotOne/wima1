import cl from "./ViewAboutMe.module.scss"

interface IViewAboutMeProp {
  firstName?: string
  selfDescription?: string
}

export function ViewAboutMe({
  firstName,
  selfDescription
}: IViewAboutMeProp) {
  return(<>
    <div className={cl.aboutMe}>
      <div className={cl.firstName}>{firstName}</div>
      <div className={cl.selfDescription}>{selfDescription}</div>
    </div>
  </>)
}