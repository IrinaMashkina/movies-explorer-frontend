import MoviesCard from "../MoviesCard/MoviesCard";
import Card1 from "../../images/card1.jpg";
import Card2 from "../../images/card2.jpg";
import Card3 from "../../images/card3.jpg";
import Card4 from "../../images/card4.jpg";
import Card5 from "../../images/card5.jpg";
import Card6 from "../../images/card6.jpg";
import Card7 from "../../images/card7.jpg";
import Card8 from "../../images/card8.jpg";
import Card9 from "../../images/card9.jpg";
import Card10 from "../../images/card10.jpg";
import Card11 from "../../images/card11.jpg";
import Card12 from "../../images/card12.jpg";

function MoviesCardList(props) {
  return (
    <>
      <section className="movies__cardlist">
        <MoviesCard
          duration="1ч 47м"
          title="33 слова о дизайне"
          src={Card1}
          className={`${props.className} ${props.activeClassName}`}
        />
        <MoviesCard
          duration="1ч 3м"
          title="Киноальманах «100 лет дизайна»"
          src={Card2}
          className={props.className}
        />
        <MoviesCard
          duration="1ч 42м"
          title="В погоне за Бенкси"
          src={Card3}
          className={props.className}
        />
        <MoviesCard
          duration="1ч 21м"
          title="Баския: Взрыв реальности"
          src={Card4}
          className={props.className}
        />
        <MoviesCard
          duration="1ч 44м"
          title="Бег это свобода"
          src={Card5}
          className={props.className}
        />
        <MoviesCard
          duration="1ч 37м"
          title="Книготорговцы"
          src={Card6}
          className={props.className}
        />
        <MoviesCard
          duration="1ч 56м"
          title="Когда я думаю о Германии ночью"
          src={Card7}
          className={props.className}
        />
        <MoviesCard
          duration="1ч 59м"
          title="Gimme Danger: История Игги и The Stooge..."
          src={Card8}
          className={props.className}
        />
        <MoviesCard
          duration="1ч 42м"
          title="Дженис: Маленькая девочка грустит"
          src={Card9}
          className={props.className}
        />
        <MoviesCard
          duration="1ч 10м"
          title="Соберись перед прыжком"
          src={Card10}
          className={props.className}
        />
        <MoviesCard
          duration="1ч 4м"
          title="Пи Джей Харви: A dog called money"
          src={Card11}
          className={props.className}
        />
        <MoviesCard
          duration="1ч 7м"
          title="По волнам: Искусство звука в кино"
          src={Card12}
          className={props.className}
        />
      </section>

    </>
  );
}

export default MoviesCardList;
