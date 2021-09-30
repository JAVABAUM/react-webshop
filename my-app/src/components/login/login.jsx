import "./login.css";
import "../shop/shop";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";


function Login() {
  return (
    <>
      {
        getAuth().currentUser ?
          <Redirect to="/user" /> : null
      }
      <div className="login-container">
        <div className="login-row row">
          <div className="col-6">
            <h2>LOGIN</h2>
            <form className="loginForm" onSubmit={(e) => login(e)}>
              <div className="mb-3">
                <label htmlFor="login-mail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="login-mail"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="login-password" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="login-password" />
              </div>
              <button type="submit" className="login-button" >
                Submit
              </button>
            </form>
            <label id="errorLogIn">

          </label>
          </div>

          

          <div className="col-6">
            <h2>SIGNUP</h2>
            <form id="signupForm" onSubmit={(e) => signup(e)}>
              <div className="mb-3">
                <label htmlFor="signup-mail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="signup-mail"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="signup-password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="signup-password"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="signup-name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="signup-name" />
              </div>
              <button type="submit" className="login-button">
                Submit
              </button>
              
            </form>
            <label id="errorSignUp">

          </label>
      </div>
          </div>
        </div>
        
    </>
  );
}

export default Login;

function login(e) {
  e.preventDefault();
  const auth = getAuth();
  var mail = document.getElementById("login-mail").value;
  var password = document.getElementById("login-password").value;
  var error = document.getElementsByClassName("error").value;

  signInWithEmailAndPassword(auth, mail, password).then((cred) => {
    console.log(cred.user);
    window.location.replace("shop");
  }).catch((err) => {
    console.log(err);
    document.getElementById('errorLogIn').innerHTML = 'Your Email or Password is incorrect';
  })
}


  const firebaseConfig = {
    apiKey: "AIzaSyAvxvEtENC1DGh00_tIv6K0Wg8qZ1rMlb4",
    authDomain: "webshop-f0863.firebaseapp.com",
    projectId: "webshop-f0863",
    storageBucket: "webshop-f0863.appspot.com",
    messagingSenderId: "727095280293",
    appId: "1:727095280293:web:718b2c3fffc99ec311c34c"
  };

  const app = initializeApp(firebaseConfig);

function signup(e) {

  e.preventDefault();
  const auth = getAuth();
  var mail = document.getElementById("signup-mail").value;
  var password = document.getElementById("signup-password").value;
  

  createUserWithEmailAndPassword(auth, mail, password).then((cred) => {
    console.log(cred.user);
    window.location.replace("shop");
  }).catch((err) => {
    console.log(err);
    document.getElementById('errorSignUp').innerHTML = 'Please fill in all the fields';
  })
}