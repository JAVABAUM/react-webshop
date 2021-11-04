import Footer from "../footer/footer";
import Topbar from '../topbar/topbar'
import './cart.css';

export default function Product(props) {
    return (
        <>
            <Topbar />
            <div className="cart-container">
                <h2 className="title">Cart</h2>
                There will be products here!
            </div>
            <Footer></Footer>
        </>
    );
}