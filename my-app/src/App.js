import Login from "./components/login/login";
import Main from "./components/main/main";
import "./css/topbar.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <Route path="/login" component={Login} />
    <Route path="/home" component={Main} />
    </Router>
  );
}

export default App;
