import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import BuutonMore from "../ButtonMore/ButtonMore";


function Movies() {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList />
      <BuutonMore />
    </main>
  );
}

export default Movies;
