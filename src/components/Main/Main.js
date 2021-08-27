import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import AboutMe from "../AboutMe/AboutMe";
import Techs from "../Techs/Techs";

function Main({loggedIn}) {
  return (
    <main className="main-in-main">
      <Promo loggedIn={loggedIn} />
      <AboutProject />
      <Techs />
      <AboutMe />
    </main>
  );
}

export default Main;
