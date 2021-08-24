import React from "react";

import MoviesCard from "../MoviesCard/MoviesCard";
import ButtonMore from "../ButtonMore/ButtonMore";
import { base_URL } from "../../constants/constants";

function MoviesCardList({
  movies,
  className,
  activeClassName,
  isMyMovies,
  savedMovies,
  handleAddOrDeleteMovie,
  isAddedMovie,
  deleteMovie,
}) {
  const [currentCountMovies, setCurrentCountMovies] = React.useState(0);
  const [moreMovies, setMoreMovies] = React.useState(0);
  const [moviesToRender, setMoviesToRender] = React.useState([]);

  // количество карточек в зависимости отширины экрана
  const countMovies = (windowSize) => {
    if (windowSize >= 1000) {
      return 12;
    }
    if (windowSize >= 600 && windowSize < 1000) {
      return 8;
    } else {
      return 5;
    }
  };

  // количество карточек, добавленных при клике на кнопку ЕЩЁ (в зависимости от ширины экрана)
  const countMore = (windowSize) => {
    if (windowSize >= 1000) {
      return 3;
    }
    if (windowSize >= 600 && windowSize < 1000) {
      return 2;
    } else {
      return 2;
    }
  };

  const handleResize = () => {
    const windowSize = window.innerWidth;
    console.log(`windowSize: ${windowSize}`);
    setMoreMovies(countMore(windowSize));
    console.log(`moreMovies: ${moreMovies}`)
  };

  const renderMore = () => {
    const count = Math.min(movies.length, currentCountMovies + moreMovies);
    const extraMovies = movies.slice(currentCountMovies, count);
    setMoviesToRender([...moviesToRender, ...extraMovies]);
    setCurrentCountMovies(count);
    console.log(`renderMore сработала`);
  };

    window.addEventListener("resize", handleResize);
  

  React.useEffect(() => {
    const windowSize = window.innerWidth;
    setMoreMovies(countMore(windowSize));
    const count = Math.min(movies.length, countMovies(windowSize));
    console.log(count);
    setMoviesToRender(movies.slice(0, count));
    setCurrentCountMovies(count);
  }, [movies]);

  const renderMoreMovies = () => renderMore();

  return (
    <>
      <ul className="movies__cardlist">
        {movies &&
          moviesToRender.map((movie) => {
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
                image={
                  isMyMovies ? movie.image : `${base_URL}${movie.image.url}`
                }
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

     {currentCountMovies < movies.length && <ButtonMore onClick={renderMoreMovies} />}
    </>
  );
}

export default MoviesCardList;
