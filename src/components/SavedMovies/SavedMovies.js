import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {
  const savedMovies = JSON.parse(localStorage.getItem("savedMovies"));
  // const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [isChecked, setIsChecked] = React.useState(false);

  function handleCheckboxChange(e) {
    setIsChecked(e.target.checked);
  }

  const filteredMoviesByCheckbox = (movies) =>
    movies.filter((movie) => movie.duration < 40);



  return (
    <main className="movies">
      <SearchForm onCheckboxChange={handleCheckboxChange} />
      <MoviesCardList
        movies={isChecked ? filteredMoviesByCheckbox(savedMovies) : savedMovies}
       
        className="movies-card__delete-button"
      />
    </main>
  );
}

export default SavedMovies;
