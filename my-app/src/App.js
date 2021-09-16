import Topbar from "./components/topbar/topbar";
import Login from "./components/login/login";
import "./css/topbar.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
      </div>
      
    <Route path="/Login" component={Login} />
    </Router>
  );
}

export default App;
