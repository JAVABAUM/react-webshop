import './App.css';
import Topbar from "./components/topbar/topbar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a>
          JAVABAUM
        </a>
        <Topbar/>
        <Footer/>

      </header>
    </div>
  );
}

export default App;
