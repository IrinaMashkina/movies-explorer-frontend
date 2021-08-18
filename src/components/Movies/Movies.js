import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import ButtonMore from "../ButtonMore/ButtonMore";


function Movies() {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList className="movies-card__like-button" activeClassName="movies-card__like-button_active"/>
      <ButtonMore />
    </main>
  );
}

export default Movies;
