import React from "react";

function MoviesCard({movie, handleClick, onDelete, isAddedMovie, trailer, image, nameRU, className, activeClassName, isSavedMovies, duration}) {


const [hour, setHour] = React.useState("");
const [minute, setMinute] = React.useState("");

const [isAdded, setIsAdded] = React.useState(false);

const [classN, setClassN] = React.useState("");



function handleLikeClick() {
  handleClick(movie, isAdded);

}

function handleDeleteClick() {
  onDelete(movie)
}

React.useEffect(() => { 
  if (duration < 60) {
    setHour("0");
    setMinute(duration);
  }
  else {
    setHour(Math.floor(duration/60).toString())
    setMinute(Math.floor((duration % 60) * 0.6).toString())
    
  }
},[duration])

React.useEffect(() => {
 setIsAdded(isAddedMovie(movie));
 if (isAdded) {
   setClassN(activeClassName)
 }
 else {
   setClassN(className);

 }

}, [activeClassName, className, isAdded, isAddedMovie, movie])


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
          //  className={isAdded ? activeClassName : className}
          className={classN}
            onClick={isSavedMovies ? handleDeleteClick : handleLikeClick}
          ></button>
        </div>
        <span className="movies-card__duration">{hour !=="0" ? `${hour}ч ${minute}мин` : `${minute} мин`}</span>
      </figcaption>
    </figure>
  );
}

export default MoviesCard;