import React from "react";

import FormValidator from "../../hooks/useFormValidator";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({movies, onCheckboxChange, onSearch}) {
  const { resetForm, inputValues, handleInputChange, isValid } = FormValidator(
    {}
  );
  const [spanError, setSpanError] = React.useState("");



  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      onSearch(inputValues.search);
 
    } else {
      setSpanError("Нужно ввести ключевое слово");
      setTimeout(() => setSpanError(""), 1500);
    }
    resetForm();
  }



  return (
    <form className="search-form forms" noValidate onSubmit={handleSubmit}>
      <div className="searh-form__container">
        <input
          minLength="1"
          name="search"
          type="input"
          className="search-form__input"
          placeholder="Фильм"
          required
          onChange={handleInputChange}
          value={inputValues.search || ""}
        ></input>

        <button type="submit" className="search-form__submit"></button>
        <span
          className={
            isValid
              ? "search-form__span-error"
              : "search-form__span-error search-form__span-error_active"
          }
        >
          {spanError}
        </span>
      </div>

      <FilterCheckbox disable={movies && !movies.message ? false : true} onChange={onCheckboxChange}/>
    </form>
  );
}

export default SearchForm;
