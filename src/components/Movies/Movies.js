import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import Preloader from "../Preloader/Preloader";


function Movies({  handleAddOrDeleteMovie,  isAddedMovie,   isLoading}) {
  const allMovies = JSON.parse(localStorage.getItem("allMovies"));
  const saveMovies =  JSON.parse(localStorage.getItem("saveMovies"));

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
    // console.log(queryMovies);
    setIsQueryMovies(true);
    if (queryMovies.length !== 0){
      localStorage.setItem("saveMovies", JSON.stringify(queryMovies));
    } 
    else {
      localStorage.removeItem("saveMovies");
    }
    
  };

  const handleMoviesSearch = (movies, searchValue) => {
    if (movies) {
      const newArr = movies.filter((movie) =>
        movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
      );
      return newArr;
    }
  };

  React.useEffect(() => {
    const searchMoviesSaved = JSON.parse(localStorage.getItem("saveMovies"));
    if (searchMoviesSaved) {
      setQueryMovies(searchMoviesSaved);
      setIsQueryMovies(true);
    }
  },[])

  return (
    <main className="movies">
      <SearchForm
        movies={queryMovies}
        isChecked={isChecked}
        onSearch={handleSearch}
        onCheckboxChange={handleCheckboxChange}
      />
      {isLoading && <Preloader />}

      {isQueryMovies && queryMovies && queryMovies.length === 0 && (
        <p>Ничего не найдено</p>
      )}

      {isQueryMovies && queryMovies && queryMovies.length !== 0 && (
        <MoviesCardList
          handleAddOrDeleteMovie={handleAddOrDeleteMovie}
          isAddedMovie={isAddedMovie}
          movies={
            isChecked ? filteredMoviesByCheckbox(queryMovies) : queryMovies
          }
          className="movies-card__like-button"
          activeClassName="movies-card__like-button_active"
        />
      )} 
    </main>
  );
}

export default Movies;
