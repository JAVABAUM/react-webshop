import "./topbar.scss"

function Topbar() {
    return (
        <>
            <div class="navbar">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">JAVA BAUM</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Shop</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>

                            <li class="nav-item">
                                <img id="icon" src="/media/images/user.png"></img>
                            </li>

                            <li class="nav-item">
                                <img id="icon" src="/media/images/shopping-cart.png"></img>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Topbar;
