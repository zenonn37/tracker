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
      <Switch>
        <Route path="/" exact component={Auth} />
        <Route path="/home" component={Home} />
        <Route path="/budget" component={Budget} />
        <Route path="/assets" component={Assets} />
        <Route path="/liabilties" component={Liability} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
