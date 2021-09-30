import Search from "./Search";
import Logo from '../../assets/img/fix logo.png'
import Cart from '../../assets/img/cart.png'
import Styles from '../../assets/css/Home.module.css'

function Header() {
    return(
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <img className={Styles.logo} src={Logo} alt="logo" />
            <div className="row collapse navbar-collapse" id="navbarCollapse">
                
                <div className={Styles.navCenter}>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className={Styles.navText} href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={Styles.navText} href="#">
                                Product
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={Styles.navText} href="#">
                                About Us
                            </a>
                        </li>
                    </ul>
                    <div className={Styles.signIn}>
                        <a className={Styles.textSignIn} href="#">Sign In</a>
                    </div>
                    <div className={Styles.search}>
                        <Search />
                    </div>
                    <div className={Styles.cart}>
                        <a><img src={Cart} alt="cart" /></a> 
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
