import Login from "./components/login/login";
import Main from "./components/main/main";
import Shop from "./components/shop/shop";
import "./css/topbar.css"; // ??????
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <Route path="/login" component={Login} />
    <Route path="/home" component={Main} />
    <Route path="/shop" component={Shop} />
    </Router>
  );
}

export default App;
