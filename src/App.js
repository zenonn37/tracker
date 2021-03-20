import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./views/404";
import Assets from "./views/Assets";
import Auth from "./views/Auth";
import Budget from "./views/Budget";
import Home from "./views/Home";
import Liability from "./views/Liability";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="side-nav">Navbar</div>
        <div className="main">
          <Switch>
            <Route path="/" exact component={Auth} />
            <Route path="/home" component={Home} />
            <Route path="/budget" component={Budget} />
            <Route path="/assets" component={Assets} />
            <Route path="/liabilties" component={Liability} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
