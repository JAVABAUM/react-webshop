import "../login/login.css"

function Main(){
    return(
        <div class="welcome-container">
    <div class="row welcome-row">
      <div class="col-sm">
          WELCOME TO THE JAVABAUM WEBSHOP
      </div>
      <div class="col-1">
        <div class="hr"></div>
      </div>
      <div class="col-sm button-container">
          <a href="/login">
              <button class="main-button">ENTER</button>
          </a>
      </div>
    </div>
  </div>
    );
}

export default Main;
    