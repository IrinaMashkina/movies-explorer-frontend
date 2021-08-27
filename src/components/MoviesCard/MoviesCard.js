import React from "react";

function MoviesCard({movie, handleClick, onDelete, isAddedMovie, movieId, trailer, image, nameRU, className, activeClassName, savedMovies, duration}) {

const [hour, setHour] = React.useState("");
const [minute, setMinute] = React.useState("");

const isAdded = isAddedMovie(movie);

function handleLikeClick() {
  handleClick(movie, isAdded);

}

function handleDeleteClick() {
  onDelete(movie._id)
}

React.useEffect(() => { 
  if (duration < 60) {
    setMinute(duration);
  }
  else {
    setHour(Math.floor(duration/60).toString())
    setMinute(Math.floor((duration % 60) * 0.6).toString())
    
  }
},[duration])


  return (
    <figure className="movies-card">
      <a
        href={trailer}
        className="movies-card__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={image} alt={nameRU} className="movies-card__image" />
      </a>
      <figcaption className="movies-card__caption">
        <div className="movies-card__container">
          <h3 className="movies-card__title">{nameRU}</h3>

          <button
            aria-label="Кнопка"
            type="button"
            className={isAdded ? activeClassName : className}
            onClick={savedMovies ? handleDeleteClick : handleLikeClick}
          ></button>
        </div>
        <span className="movies-card__duration">{hour}ч {minute}мин</span>
      </figcaption>
    </figure>
  );
}

export default MoviesCard;