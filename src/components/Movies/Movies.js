import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import ButtonMore from "../ButtonMore/ButtonMore";

function Movies(props) {


  return (
    <main className="movies">
      <SearchForm />

      {props.allMovies.length === 0 && <p>Ничего не найдено</p>}

      {props.allMovies.length !== 0 && (
        <MoviesCardList movies={props.movies}
          className="movies-card__like-button"
          activeClassName="movies-card__like-button_active"
        />
      )}

      <ButtonMore />
    </main>
  );
}

export default Movies;
