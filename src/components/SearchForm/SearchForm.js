// import React from 'react';
// import ReactDOM from 'react-dom';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <form className="search-form">
      <input
        type="input"
        className="search-form__input"
        placeholder="Фильм"
      ></input>
      <button type="submit" className="search-form__submit"></button>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;