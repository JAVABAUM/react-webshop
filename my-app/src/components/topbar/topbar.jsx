import "./topbar.css"

function Topbar() {
    return (
        <>
            <div class="navbar">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Shop</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">About</a>
                                </li>
                            </ul>
                        </div>


                        <div id="iconDiv">
                            <a href="#">
                                <div class="headerIcon">
                                    <img id="icon" src="/media/images/user.png"></img>
                                    <a id="leftmargin" href="#">Login</a>

                                </div>

                            </a>
                        </div>

                        <div id="iconDiv">
                            <a href="#">
                                <div class="headerIcon">
                                    <img id="icon" src="/media/images/shopping-cart.png"></img>
                                    <a id="leftmargin" href="#">Cart</a>
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

export default Topbar;
