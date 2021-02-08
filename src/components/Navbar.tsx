import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = (): JSX.Element => {
    return (
        <nav id="navbar" >
            <div className="container">
                <h1 className="page-name" >
                    balloons
                </h1>
                <ul className="nav-links" >
                    <li><Link to="/" >Home</Link></li>
                    <li>Product</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li><Link to="/checkout" >Cart</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;