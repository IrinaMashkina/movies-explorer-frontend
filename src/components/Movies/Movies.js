import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import ButtonMore from "../ButtonMore/ButtonMore";

function Movies(props) {
  const [isChecked, setIsChecked] = React.useState(false);

  function handleCheckboxChange(e) {
    console.log(e.target.checked);
    setIsChecked(e.target.checked);
  }

  const filteredMoviesByCheckbox = (movies) =>
    movies.filter((movie) => movie.duration < 40);


    const handleMoviesSearch = (movies, searchValue) => movies.filter((movie) => movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
      );
    
      const filteredMoviesbyQuery = () => {
        const movies = localStorage.getItem("allMovies");
        console.log(movies);
        handleMoviesSearch(movies, )
      }


  return (
    <main className="movies">
      <SearchForm
      isChecked={isChecked}
        onFilteredMovie={filteredMoviesByCheckbox}
        onSearch={props.onSearch}
        onCheckboxChange={handleCheckboxChange}
      />

      {props.allMovies.length === 0 && <p>Ничего не найдено</p>}

      {props.allMovies.length !== 0 && (
        <MoviesCardList
          movies={props.movies}
          className="movies-card__like-button"
          activeClassName="movies-card__like-button_active"
        />
      )}

      <ButtonMore />
    </main>
  );
}

export default Movies;
