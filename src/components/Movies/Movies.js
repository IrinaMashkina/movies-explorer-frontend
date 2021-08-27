import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import Preloader from "../Preloader/Preloader";
import ModalError from "../ModalError/ModalError";

function Movies(props) {
  const allMovies = JSON.parse(localStorage.getItem("allMovies"));

  const [queryMovies, setQueryMovies] = React.useState([]);
  const [isQueryMovies, setIsQueryMovies] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(false);

  function handleCheckboxChange(e) {
    setIsChecked(e.target.checked);
  }

  const filteredMoviesByCheckbox = (movies) => {
    if (movies) {
      return movies.filter((movie) => movie.duration < 40);
    }
  };

  const handleSearch = (value) => {
    setQueryMovies(handleMoviesSearch(allMovies, value));
    setIsQueryMovies(true);
  };

  const handleMoviesSearch = (movies, searchValue) => {
    if (movies) {
      const newArr = movies.filter((movie) =>
        movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
      );
      return newArr;
    }
  };

  return (
    <main className="movies">
      <SearchForm
        isChecked={isChecked}
        onSearch={handleSearch}
        onCheckboxChange={handleCheckboxChange}
      />
      {props.isLoading && <Preloader />}

      {isQueryMovies && queryMovies && queryMovies.length === 0 && (
        <p>Ничего не найдено</p>
      )}

      {isQueryMovies && queryMovies && queryMovies.length !== 0 && (
        <MoviesCardList
        handleAddOrDeleteMovie={props.handleAddOrDeleteMovie}
          isAddedMovie={props.isAddedMovie}
          movies={
            isChecked ? filteredMoviesByCheckbox(queryMovies) : queryMovies
          }
          className="movies-card__like-button"
          activeClassName="movies-card__like-button_active"
        />
      )}

      {props.serverError && (
        <ModalError
          isOpen={props.isModalErrorOpen}
          onClose={props.closePopup}
          text={props.serverError}
        />
      )}
    </main>
  );
}

export default Movies;
