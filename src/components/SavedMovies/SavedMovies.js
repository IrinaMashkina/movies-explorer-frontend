import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList className="movies-card__delete-button"/>
    </main>
  );
}

export default SavedMovies;
