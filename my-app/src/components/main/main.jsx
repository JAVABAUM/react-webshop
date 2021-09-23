import "../login/login.css"

function Main(){
    return(
        <div className="welcome-container">
    <div className="row welcome-row">
      <div className="col-sm">
          WELCOME TO THE JAVABAUM WEBSHOP
      </div>
      <div className="col-1">
        <div className="hr"></div>
      </div>
      <div className="col-sm button-container">
          <a href="/login">
              <button className="main-button">ENTER</button>
          </a>
      </div>
    </div>
  </div>
    );
}

export default Main;
    