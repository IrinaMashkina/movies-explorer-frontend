import React from "react";

function MoviesCard(props) {
  return (
    <figure className="movies-card">
      <a
        href={props.trailer}
        className="movies-card__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={props.image} alt={props.nameRU} className="movies-card__image" />
      </a>
      <figcaption className="movies-card__caption">
        <div className="movies-card__container">
          <h3 className="movies-card__title">{props.nameRU}</h3>

          <button
            aria-label="Кнопка"
            type="button"
            className={props.className}
          ></button>
        </div>
        <span className="movies-card__duration">{props.duration}</span>
      </figcaption>
    </figure>
  );
}

export default MoviesCard;
