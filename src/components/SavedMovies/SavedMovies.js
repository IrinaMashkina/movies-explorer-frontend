import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function SavedMovies({ deleteMovie, isAddedMovie, isLoading }) {
  const savedMovies = JSON.parse(localStorage.getItem("savedMovies"));

  const [isChecked, setIsChecked] = React.useState(false);

  function handleCheckboxChange(e) {
    setIsChecked(e.target.checked);
  }

  const filteredMoviesByCheckbox = (movies) =>
    movies.filter((movie) => movie.duration < 40);

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
