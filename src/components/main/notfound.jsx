import "../login/login.css"

function Notfound(){
    return(
        <div className="welcome-container">
    <div className="row welcome-row">
      <div className="col-sm">
          404 PAGE NOT FOUND
      </div>
      <div className="col-1">
        <div className="hr"></div>
      </div>
      <div className="col-sm button-container">
          <a href="/login">
              <button className="main-button">HOME</button>
          </a>
      </div>
    </div>
  </div>
    );
}

export default Notfound;
    