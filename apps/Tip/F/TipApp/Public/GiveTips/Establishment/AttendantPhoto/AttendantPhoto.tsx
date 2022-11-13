import cl from "./AttendantPhoto.module.scss"

interface IAttendantPhotoProp {
  imageUrl?: string
  firstName?: string
}

export function AttendantPhoto({
  imageUrl,
  firstName
}: IAttendantPhotoProp) {

  imageUrl = imageUrl || "/apps/Tip/Illustration/tip.png"
  firstName = firstName || ""
  
  return(<>
  <div className={cl.attendant}>
    <div className={cl.photo} 
      style={{backgroundImage: `url(${imageUrl})`}}/>
    <div className={cl.firstName}>{firstName}</div>
  </div>
  </>)
}