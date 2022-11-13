import cl from "./AttendantPhoto.module.scss"

interface IAttendantPhotoProp {
  imageUrl?: string
  firstName?: string
  onClick?: ()=>void
}

export function AttendantPhoto({
  imageUrl,
  firstName,
  onClick
}: IAttendantPhotoProp) {

  imageUrl = imageUrl || "/apps/Tip/Illustration/tip.png"
  firstName = firstName || ""
  
  return(<>
  <div className={cl.attendantWrap}>
  <div className={cl.attendant} onClick={onClick}>
    <div className={cl.photo} 
      style={{backgroundImage: `url(${imageUrl})`}}/>
    <div className={cl.firstName}>{firstName}</div>
  </div>
  </div>
  </>)
}