import React from "react";
// import PropTypes from "prop-types";
import MoviesCard from "../MoviesCard/MoviesCard";
import {base_URL} from "../../constants/constants";

function MoviesCardList({ movies, className, isMyMovies, }) {


  return (
    <ul className="movies__cardlist">
      {movies &&
        movies.map((movie) => { console.log(movie)
        //  console.log(movie.image)
          return (
            <MoviesCard
              key={isMyMovies ? movie._id : movie.id}
              className={className}
              country={movie.country}
              director={movie.director}
              duration={movie.duration}
              year={movie.year}
              description={movie.description}
              image={isMyMovies ? movie.image : `${base_URL}${movie.image.url}`}
              trailer={isMyMovies ? movie.trailer : movie.trailerLink}
              thumbnail={!isMyMovies ? movie.image.formats.thumbnail.url : movie.thumbnail}
              movieId={!isMyMovies ? movie.id : movie.movieId}
              nameRU={movie.nameRU}
              nameEN={movie.nameEN}
            />
          );
        })}
    </ul>
  );
}

export default MoviesCardList;
