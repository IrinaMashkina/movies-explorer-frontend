import React from "react";

function MoviesCard({movie, handleClick, onDelete, isAddedMovie, movieId, trailer, image, nameRU, className, savedMovies, duration}) {

function handleLikeClick() {
  const isAdded = isAddedMovie(movie);
  console.log(`movie при лайке: ${movie}`);
  console.log(`isAdded: ${isAdded}`);
  handleClick(movie, isAdded);
}

function handleDeleteClick() {
  console.log(movieId)
  onDelete(movieId)
}

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
            className={className}
            onClick={savedMovies ? handleDeleteClick : handleLikeClick}
          ></button>
        </div>
        <span className="movies-card__duration">{duration}</span>
      </figcaption>
    </figure>
  );
}

export default MoviesCard;
