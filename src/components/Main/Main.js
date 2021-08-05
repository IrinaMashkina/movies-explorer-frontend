import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import NavTab from "../NavTab/NavTab";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Techs from "../Techs/Techs";

function Main() {
  return (
    <main className="main-in-main">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
    </main>
  );
}

export default Main;
