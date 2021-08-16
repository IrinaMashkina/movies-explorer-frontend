import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import ButtonMore from "../ButtonMore/ButtonMore";


function Movies() {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList />
      <ButtonMore />
    </main>
  );
}

export default Movies;
