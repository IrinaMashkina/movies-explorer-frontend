import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function SavedMovies({ isAddedMovie, deleteMovie, isLoading }) {
  const savedMovies = JSON.parse(localStorage.getItem("savedMovies"));

  const [queryMovies, setQueryMovies] = React.useState([]);
  const [isQueryMovies, setIsQueryMovies] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(false);
  const [isNotFoundMovies, setIsNotFoundMovies] = React.useState(false);

  function handleCheckboxChange(e) {
    setIsChecked(e.target.checked);
  }

  function filteredMoviesByCheckbox(movies)  {
    if (movies) {
      return movies.filter((movie) => movie.duration < 40);
    }
  };
  function handleMoviesSearch(movies, searchValue) {
    if (movies) {
      const newArr = movies.filter((movie) =>
        movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
      );
      return newArr;
    }
  };

 function handleSearch(value)  {
    setQueryMovies(handleMoviesSearch(savedMovies, value));
    console.log(handleMoviesSearch(savedMovies, value))
    if (queryMovies.length !== 0) {
      setIsQueryMovies(true);
      setIsNotFoundMovies(false);
    } else {
      setIsNotFoundMovies(true);
      setIsQueryMovies(false);
    }
  };




  return (
    <main className="movies">
      <SearchForm
        onCheckboxChange={handleCheckboxChange}
        onSearch={handleSearch}
        length={savedMovies.length}
        isSavedMovies
      />

      {isLoading && <Preloader />}

      {savedMovies.length === 0 && (
        <p className="movies__message">Ещё нет сохранённых фильмов</p>
      )}



      {!isLoading && savedMovies.length !== 0 && !isNotFoundMovies && (
        <MoviesCardList
          isAddedMovie={isAddedMovie}
          movies={
            isChecked ? filteredMoviesByCheckbox(savedMovies) : savedMovies
          }
          deleteMovie={deleteMovie}
          isMyMovies
          isSavedMovies
          className="movies-card__delete-button"
          activeClassName="movies-card__delete-button"
        />
      )}

      {!isLoading && isQueryMovies && !isNotFoundMovies && (
        <MoviesCardList
          isAddedMovie={isAddedMovie}
          movies={
            isChecked ? filteredMoviesByCheckbox(queryMovies) : queryMovies
          }
          deleteMovie={deleteMovie}
          isMyMovies
          isSavedMovies
          className="movies-card__delete-button"
          activeClassName="movies-card__delete-button"
        />
      )}
            {isNotFoundMovies && <p>Ничего не найдено</p>}
    </main>
  );
}

export default SavedMovies;
