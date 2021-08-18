function FilterCheckbox() {
  return (
    <label className="filter-checkbox" htmlFor="filter-checkbox__input">
      <input type="checkbox" className="filter-checkbox__input_invisible" id="filter-checkbox__input"></input>
      <span className="filter-checkbox__input_visible"></span>
      <span className="filter-checkbox__text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
