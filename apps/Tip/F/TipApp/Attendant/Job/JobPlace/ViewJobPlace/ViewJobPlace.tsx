import cl from "./ViewJobPlace.module.scss"

interface IViewJobPlaceProp {
  placeName: string
}

export function ViewJobPlace({
  placeName
}: IViewJobPlaceProp) {
  return(<>
  <div className={cl.placeName}>
  {placeName}
  </div>
  </>)
}