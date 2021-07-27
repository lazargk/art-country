import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import Contacts from "./components/Contacts";
import Pictures from "./components/Pictures";
import Awards from "./components/Awards";
import Volunteering from "./components/Volunteering";

export const SUB_URL = ""; //"/art-country";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header container">
          <Navbar />
        </header>
        <main className="container">
          <Switch>
            <Route path={SUB_URL + "/contacts"}>
              <Contacts />
            </Route>
            <Route path={SUB_URL + "/pictures"}>
              <Pictures />
            </Route>
            <Route path={SUB_URL + "/awards"}>
              <Awards />
            </Route>
            <Route path={SUB_URL + "/volunteering"}>
              <Volunteering />
            </Route>
            <Route path={SUB_URL + "/"}>
              <Main />
            </Route>
          </Switch>
        </main>
        <footer className="container">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
