import cl from "./ViewPublish.module.scss"

interface IViewPublishProp {
  isMovicPublic: boolean
}
export function ViewPublish({
  isMovicPublic
}: IViewPublishProp) {
  
  let text = "The movic is not published. Only you can view it."
  if(isMovicPublic) {
    text = "The movic is public. Your friends can access the movic using following link"
  }
  return(<>
    <div className={cl.viewPublish}>
      {text}
    </div>
  </>)
}