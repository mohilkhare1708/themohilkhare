import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/css/App.css";
import "./assets/css/default.css";
import "./assets/css/layout.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/media-queries.css";
import Home from "./components/Home";
import Admin from "./components/Admin";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/admin" exact component={() => <Admin />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
