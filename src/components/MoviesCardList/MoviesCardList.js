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

  const handleResize = React.useCallback(() => {
    const windowSize = window.innerWidth;
    setMoreMovies(countMore(windowSize));
    const count = Math.min(movies.length, countMovies(windowSize));
    setMoviesToRender(movies.slice(0, count));
    setCurrentCountMovies(count);
  },[movies]);

  // меняем количество отображающихся фильмов в зависимости от меняющегося размера экрана
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);
  

  const renderMore = () => {
    const count = Math.min(movies.length, currentCountMovies + moreMovies);
    const extraMovies = movies.slice(currentCountMovies, count);
    setMoviesToRender([...moviesToRender, ...extraMovies]);
    setCurrentCountMovies(count);
  };

  React.useEffect(() => {
    if (!movies.message) {
      console.log(movies)
      const windowSize = window.innerWidth;
      setMoreMovies(countMore(windowSize));
      const count = Math.min(movies.length, countMovies(windowSize));
      setMoviesToRender(movies.slice(0, count));
      setCurrentCountMovies(count);
    }

  }, [movies]);

  return (
    <>
      <ul className="movies__cardlist">
        {movies && !movies.message && 
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

{movies.message && <p className="movies__message">{movies.message}</p>}
      </ul>



      {movies && currentCountMovies < movies.length && (
        <ButtonMore onClick={renderMore} />
      )}
    </>
  );
}

export default MoviesCardList;
