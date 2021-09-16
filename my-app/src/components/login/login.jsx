import "./login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-row row">
        <div className="col-6">
          <h2>LOGIN</h2>
          <form>
            <div className="mb-3">
              <label for="login-mail" className="form-label">
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
              <label for="login-password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="login-password" />
            </div>
            <button type="submit" className="login-button">
              Submit
            </button>
          </form>
        </div>
        <div className="col-6">
          <h2>SIGNUP</h2>
          <form>
            <div className="mb-3">
              <label for="signup-mail" className="form-label">
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
              <label for="signup-password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="signup-password"
              />
            </div>
            <div className="mb-3">
              <label for="signup-name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="signup-name" />
            </div>
            <button type="submit" className="login-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
