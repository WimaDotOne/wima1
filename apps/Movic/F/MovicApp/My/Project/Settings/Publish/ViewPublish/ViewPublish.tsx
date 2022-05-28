import cl from "./ViewPublish.module.scss"

interface IViewPublishProp {

}
export function ViewPublish({

}: IViewPublishProp) {
  return(<>
    <div className={cl.viewPublish}>
      The movic is not published. Only you can view it.
    </div>
  </>)
}