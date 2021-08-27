import React from "react";

function ModalError(props) {
  return (
    <section
      className={`popup popup_place_infotooltip ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <h3 className="popup__title_place_infotooltip">{props.text}</h3>
        <button
          onClick={props.onClose}
          type="button"
          className="popup__close-button"
          aria-label="закрыть"
        />
      </div>
    </section>
  );
}

export default ModalError;
