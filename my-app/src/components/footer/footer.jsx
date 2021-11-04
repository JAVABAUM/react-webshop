import "./footer.css"

function Footer() {
    return (
        <div className="footer">
            <footer class="py-3 my-4">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><a href="/home" class="nav-link px-2 text-muted">Home</a></li>
                    <li class="nav-item"><a href="/shop" class="nav-link px-2 text-muted">Webshop</a></li>
                    <li class="nav-item"><a href="/about" class="nav-link px-2 text-muted">About</a></li>
                </ul>
                <p class="text-center text-muted">© 2021 JAVA BAUM</p>
            </footer>
        </div>
    )
    
}

export default Footer;

