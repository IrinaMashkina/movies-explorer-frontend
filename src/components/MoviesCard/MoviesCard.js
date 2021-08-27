import React from "react";

function MoviesCard({movie, handleClick, onDelete, isAddedMovie, movieId, trailer, image, nameRU, className, activeClassName, savedMovies, duration}) {

const isAdded = isAddedMovie(movie);

function handleLikeClick() {
  handleClick(movie, isAdded);

}

function handleDeleteClick() {
  onDelete(movie._id)
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
            className={isAdded ? activeClassName : className}
            onClick={savedMovies ? handleDeleteClick : handleLikeClick}
          ></button>
        </div>
        <span className="movies-card__duration">{duration}</span>
      </figcaption>
    </figure>
  );
}

export default MoviesCard;