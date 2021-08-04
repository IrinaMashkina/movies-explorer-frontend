

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
          <h2 className="movies-card__title">{card.title}</h2>
         
            <button
              aria-label="Кнопка 'нравится'."
              type="button"
              className="mobies-card__like-button"
            ></button>
            </div>
            <span className="movies-card__srcduration">{card.duration}</span>
          
        </figcaption>

      </figure>
    )
}

export default MoviesCard;