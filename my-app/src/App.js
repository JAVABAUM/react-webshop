import './App.css';
import Topbar from "./components/topbar/topbar";
import Footer from "./components/footer/footer";
import Shop from "./components/shop/shop";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Topbar/>
        <Shop/>
        <Footer/>

      </header>
    </div>
  );
}

export default App;
