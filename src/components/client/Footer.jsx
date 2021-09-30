import Styles from '../../assets/css/Home.module.css'
import Logo from '../../assets/img/fix logo.png'
import Facebook from '../../assets/img/facebook-logo.png'
import Instagram from '../../assets/img/instagram.png'
import Twitter from '../../assets/img/twitter.png'

function Footer (){


    return (
        <section className={Styles.foot}>
            <footer className="bg-dark text-white text-center">
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <a href="#"><img className={Styles.footLogo} src={Logo}></img></a>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Sapeda</h5>
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white">Product</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">About Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-0">Follow Us On</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#" className="text-white"><img className={Styles.login} src={Facebook} />Facebook</a>
                                </li>
                                <li>
                                    <a href="#" className="text-white"><img className={Styles.login} src={Instagram} />Instragram</a>
                                </li>
                                <li>
                                    <a href="#" className="text-white"><img className={Styles.login} src={Twitter} />Twitter</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
}

export default Footer