import React from "react";

function MoviesCard(props) {


  const {nameRu, image, duration, trailer} = props;
  return (
    <figure className="movies-card">
      <a href={trailer} className="movies-card__link" target="_blank" rel="noopener noreferrer"><img src={image} alt={nameRu} className="movies-card__image" /></a>
      <figcaption className="movies-card__caption">
        <div className="movies-card__container">
          <h3 className="movies-card__title">{nameRu}</h3>

          <button
            aria-label="Кнопка"
            type="button"
            className={props.className}
          ></button>
        </div>
        <span className="movies-card__duration">{duration}</span>
      </figcaption>
    </figure>
  );
}

export default MoviesCard;
