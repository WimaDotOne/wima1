import cl from "./MovieBar.module.scss"

interface IMovieBarprop {
  
}
export function MovieBar() {

  const imageBackgroundColor = "#ccc"
  const movieImageStyle ={
    backgroundImage: "url(/apps/Movic/Icon/film.svg)"
  }
  return(<>
    <div className={cl.movieBar}>
      <div className={cl.movie}>
        <div className={cl.movieImageDiv}>
          <div className={cl.movieImage} style={movieImageStyle}>
          </div>
        </div>
        <div className={cl.moiveName}>Scott Pilgrilm vs the World</div>
      </div>
    </div>
  </>)
}