import cl from "./ViewYouTubeLink.module.scss"

interface IViewYouTubeLinkProp {
  youTubeId: string
}
export function ViewYouTubeLink({
  youTubeId
}:IViewYouTubeLinkProp) {
  return(<>
    <div className={cl.youTubeId}>
      <iframe width="240" height="180"
        className={cl.youTubeFrame}
        src={`https://www.youtube.com/embed/${youTubeId}`}>
      </iframe>
    </div>
  </>)
}