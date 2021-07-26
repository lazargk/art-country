import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import Contacts from "./components/Contacts";
import Pictures from "./components/Pictures"

export const SUB_URL = "/art-country";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header container">
          <Navbar />
        </header>
        <main className="main-container container">
          <Switch>
            <Route path={SUB_URL + "/contacts"}>
              <Contacts />
            </Route>
            <Route path={SUB_URL + "/pictures"}>
              <Pictures />
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
