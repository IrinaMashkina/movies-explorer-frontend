import React from "react";

import MoviesCard from "../MoviesCard/MoviesCard";
import { base_URL } from "../../constants/constants";

function MoviesCardList({
  movies,
  className,
  activeClassName,
  isMyMovies,
  savedMovies,
  handleAddOrDeleteMovie,
  isAddedMovie,
  deleteMovie
}) {
  return (
    <ul className="movies__cardlist">
      {movies &&
        movies.map((movie) => {
         

          return (
            <MoviesCard
              movie={movie}
              key={isMyMovies ? movie._id : movie.id}
              className={className}
              activeClassName={activeClassName}
              country={movie.country}
              director={movie.director}
              duration={movie.duration}
              year={movie.year}
              description={movie.description}
              image={isMyMovies ? movie.image : `${base_URL}${movie.image.url}`}
              trailer={isMyMovies ? movie.trailer : movie.trailerLink}
              thumbnail={
                !isMyMovies
                  ? movie.image.formats.thumbnail.url
                  : movie.thumbnail
              }
              movieId={!isMyMovies ? movie.id : movie.movieId}
              nameRU={movie.nameRU}
              nameEN={movie.nameEN}
              handleClick={handleAddOrDeleteMovie}
              isAddedMovie={isAddedMovie}
              savedMovies={savedMovies}
              onDelete={deleteMovie}
            />
          );
        })}
    </ul>
  );
}

export default MoviesCardList;
