import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function SavedMovies({ deleteMovie, isAddedMovie, isLoading }) {
  const savedMovies = JSON.parse(localStorage.getItem("savedMovies"));

  const [queryMovies, setQueryMovies] = React.useState([]);
  const [isQueryMovies, setIsQueryMovies] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(false);

  function handleCheckboxChange(e) {
    setIsChecked(e.target.checked);
  }

  const filteredMoviesByCheckbox = (movies) =>
    savedMovies.filter((movie) => movie.duration < 40);

  const handleSearch = (value) => {
    setQueryMovies(handleMoviesSearch(savedMovies, value));
    setIsQueryMovies(true);
  };

  const handleMoviesSearch = (movies, searchValue) =>
    movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
    );


  return (
    <main className="movies">
      <SearchForm onCheckboxChange={handleCheckboxChange} />

      {isLoading && <Preloader />}


      {!isLoading && (
        <MoviesCardList
          isAddedMovie={isAddedMovie}
          movies={
            isChecked ? filteredMoviesByCheckbox(savedMovies) : savedMovies
          }
          deleteMovie={deleteMovie}
          isMyMovies
          savedMovies
          className="movies-card__delete-button"
        />
      )}
    </main>
  );
}

export default SavedMovies;
