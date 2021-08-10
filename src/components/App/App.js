import "./App.css";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import { Route, Switch } from "react-router-dom";

// import Main from "../Main/Main";

function App() {
  return (
    // <div className="page">
    //   <Header />
    //   <Movies />
    //   <Footer />
    // </div>

    // <div className="page">
    //   <Main />
    //   <Footer />
    // </div>

    <div className="page">
      <Switch>
        <Route path="/sign-up">
          <Register />
        </Route>
        <Route path="/sign-in">
          <Login />
        </Route>
        <Route path="/">
          <Header />
          <Movies />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
