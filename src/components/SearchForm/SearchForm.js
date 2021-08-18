// import React from 'react';
// import ReactDOM from 'react-dom';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <form className="search-form">
      <div className="searh-form__container">
        <input
          type="input"
          className="search-form__input"
          placeholder="Фильм"
          required
        ></input>
        <button type="submit" className="search-form__submit"></button>
      </div>

      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
