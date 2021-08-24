function ButtonMore({onClick}) {
    return (
        <button
        type="button"
        className="more-btn"
        aria-label="Показать больше фильмов"
        onClick={onClick}
      >
        Ещё
      </button>
    )
}

export default ButtonMore;