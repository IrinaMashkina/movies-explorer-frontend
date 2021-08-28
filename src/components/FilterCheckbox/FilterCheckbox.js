import React from "react";

function FilterCheckbox(props) {

React.useEffect(() => {
  console.log(props.disable)
},[props.disable])

  return (
    <label className="filter-checkbox" htmlFor="filter-checkbox__input">
      <input onChange={props.onChange} disabled = {props.disable ? true : false} type="checkbox" className={props.disable ? "filter-checkbox__input_invisible filter-checkbox__input_invisible_disabled" : "filter-checkbox__input_invisible"} id="filter-checkbox__input"></input>
      <span className={props.disable ? "filter-checkbox__input_visible filter-checkbox__input_visible_disabled" : "filter-checkbox__input_visible"} disabled = {props.disable ? true : false}></span>
      <span className="filter-checkbox__text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
