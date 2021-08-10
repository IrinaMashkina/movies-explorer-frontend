import "./App.css";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";
// import Main from "../Main/Main";

function App() {
  return (
    <div className="page">
      <Header />
      <Movies />
      <Footer />
    </div>

    // <div className="page">
    //   <Main />
    //   <Footer />
    // </div>
  );
}

export default App;
