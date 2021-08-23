import React from "react";
// import PropTypes from "prop-types";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, className, isChecked }) {
  const [moviesMovies, setFilteredMovies] = React.useState([]);

  const filteredMoviesByCheckbox = (movies) =>
  movies.filter((movie) => movie.duration < 40);



React.useEffect((savedMovies) => {
  if (isChecked) {
    setFilteredMovies((movies) => filteredMoviesByCheckbox(movies));
  } 
}, [isChecked]);

  return (
    <ul className="movies__cardlist">
      {movies &&
        movies.map((movie) => {
        //  console.log(movie.image)
          return (
            <MoviesCard
              key={movie._id}
              className={className}
              country={movie.country}
              director={movie.director}
              duration={movie.duration}
              year={movie.year}
              description={movie.description}
              image={movie.image}
              trailer={movie.trailer}
              thumbnail={movie.thumbnail}
              movieId={movie.movieId}
              nameRU={movie.nameRU}
              nameEN={movie.nameEN}
            />
          );
        })}
    </ul>
  );
}

export default MoviesCardList;
