import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/css/style.css";
import Guest from "./pages/guest/Guest";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Guest} />
      </Switch>
    </Router>
  );
}

export default App;
