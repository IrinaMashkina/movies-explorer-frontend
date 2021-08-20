import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const [filteredMovies, setFilteredMovies] = React.useState([]);

  // return (
  //   <>
  //     <section className="movies__cardlist">
  //       <MoviesCard
  //         duration="1ч 47м"
  //         title="33 слова о дизайне"
  //         src={Card1}
  //         className={`${props.className} ${props.activeClassName}`}
  //       />
  //       <MoviesCard
  //         duration="1ч 3м"
  //         title="Киноальманах «100 лет дизайна»"
  //         src={Card2}
  //         className={props.className}
  //       />
  //       <MoviesCard
  //         duration="1ч 42м"
  //         title="В погоне за Бенкси"
  //         src={Card3}
  //         className={props.className}
  //       />
  //       <MoviesCard
  //         duration="1ч 21м"
  //         title="Баския: Взрыв реальности"
  //         src={Card4}
  //         className={props.className}
  //       />
  //       <MoviesCard
  //         duration="1ч 44м"
  //         title="Бег это свобода"
  //         src={Card5}
  //         className={props.className}
  //       />
  //       <MoviesCard
  //         duration="1ч 37м"
  //         title="Книготорговцы"
  //         src={Card6}
  //         className={props.className}
  //       />
  //       <MoviesCard
  //         duration="1ч 56м"
  //         title="Когда я думаю о Германии ночью"
  //         src={Card7}
  //         className={props.className}
  //       />
  //       <MoviesCard
  //         duration="1ч 59м"
  //         title="Gimme Danger: История Игги и The Stooge..."
  //         src={Card8}
  //         className={props.className}
  //       />
  //       <MoviesCard
  //         duration="1ч 42м"
  //         title="Дженис: Маленькая девочка грустит"
  //         src={Card9}
  //         className={props.className}
  //       />
  //       <MoviesCard
  //         duration="1ч 10м"
  //         title="Соберись перед прыжком"
  //         src={Card10}
  //         className={props.className}
  //       />
  //       <MoviesCard
  //         duration="1ч 4м"
  //         title="Пи Джей Харви: A dog called money"
  //         src={Card11}
  //         className={props.className}
  //       />
  //       <MoviesCard
  //         duration="1ч 7м"
  //         title="По волнам: Искусство звука в кино"
  //         src={Card12}
  //         className={props.className}
  //       />
  //     </section>

  return (
    <ul className="movies__cardlist">
      {filteredMovies.map((movie) => (
        <li className="movies-cardlist__item" key={movie.id}>
          <MoviesCard             country={movie.country}
            director={movie.director}
            duration={movie.duration}
            year={movie.year}
            description={movie.description}
            image={ movie.image}
            trailer={ movie.trailer}
            thumbnail={movie.thumbnail}
            movieId={movie.movieId}
            nameRU={movie.nameRU}
            nameEN={movie.nameEN} />
        </li>
      ))}
    </ul>
  );
}

export default MoviesCardList;
