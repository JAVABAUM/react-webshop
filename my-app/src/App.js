import Login from "./components/login/login";
import Main from "./components/main/main";
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
    <Route path="/" component={Main} />
    </Router>
  );
}

export default App;
