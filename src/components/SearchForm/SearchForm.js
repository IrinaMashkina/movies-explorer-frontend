import React, { useEffect } from "react";

import FormValidator from "../../hooks/useFormValidator";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({
  length,
  onCheckboxChange,
  onSearch,
  movies,
  isSavedMovies,
}) {
  const { resetForm, inputValues, handleInputChange, isValid } = FormValidator(
    {}
  );
  const [spanError, setSpanError] = React.useState("");

  const [isSubmitDisable, setIsSubmitDisable] = React.useState(true);
  const [isCheckboxDisable, setIsCheckboxDisable] = React.useState(true);

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

  React.useEffect(() => {
    if (isSavedMovies && length === 0) {
      setIsSubmitDisable(true);
      setIsCheckboxDisable(true)
    } else if (movies && movies.length === 0) {
      setIsSubmitDisable(false);
      setIsCheckboxDisable(true);
    } else {
      setIsSubmitDisable(false);
      setIsCheckboxDisable(false);
    }
  }, [isSavedMovies, length, movies]);

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

        <button
          // disabled={isSavedMovies && length === 0 ? true : false}
          type="submit"
          className={
            isSubmitDisable
              ? "search-form__submit search-form__submit_disabled"
              : "search-form__submit"
          }
        ></button>
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

      <FilterCheckbox
        // disable={(length && length !== 0) || movies ? false : true}
        disable = {isCheckboxDisable}
        onChange={onCheckboxChange}
      />
    </form>
  );
}

export default SearchForm;
