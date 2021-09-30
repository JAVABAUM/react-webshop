import "./topbar.css"
import "../shop/cart"

export default function Topbar() {
    return (
        <>
            <div className="navbar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Shop</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                     About
                                </li>
                            </ul>
                        </div>


                        <div id="iconDiv">
                            <a href="#">
                                <div className="headerIcon">
                                    <img id="icon" src="/media/images/user.png"></img>
                                    Login

                                </div>

                            </a>
                        </div>

                        <div id="iconDiv">
                            <a href="/cart">
                                <div className="headerIcon">
                                    <img id="icon" src="/media/images/shopping-cart.png"></img>
                                    Cart
                                </div>
                            </a>


                        </div>





                    </div>
                </nav>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
                crossorigin="anonymous"></script>
        </>
    );
}

