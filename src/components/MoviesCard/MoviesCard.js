import React from "react";

function MoviesCard(card) {
    return (
<figure className="movies-card">
        <img 
          src={card.src}
          alt={card.title}
          className="movies-card__image"
        />
        <figcaption className="movies-card__caption">
        <div className="movies-card__container">
          <h3 className="movies-card__title">{card.title}</h3>
         
            <button
              aria-label="Кнопка"
              type="button"
              className={card.className}
            ></button>
            </div>
            <span className="movies-card__duration">{card.duration}</span>
          
        </figcaption>

      </figure>
    )
}

export default MoviesCard;