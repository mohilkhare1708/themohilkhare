import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/css/App.css";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Helmet from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mohil Khare</title>
      </Helmet>
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
