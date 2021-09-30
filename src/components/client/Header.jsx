import Search from "./Search";
import Logo from '../../assets/img/fix logo.png'
import Cart from '../../assets/img/cart.png'
import Login from '../../assets/img/user.png'
import Styles from '../../assets/css/Home.module.css'

function Header() {
    return(
        <div className={Styles.navBg}>
            <nav className= "navbar navbar-expand-md fixed-top" style={{"background-color" : "#f1f2ee"}}>
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
                        <div className={Styles.loginPos}>
                            <a href="#" alt="login"><img className={Styles.login}src={Login}></img></a>
                        </div>
                        <div className={Styles.search}>
                            <Search />
                        </div>
                        <div className={Styles.cart}>
                            <a href=""><img src={Cart} alt="cart" /></a> 
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
