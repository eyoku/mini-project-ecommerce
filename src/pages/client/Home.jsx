import Header from "../../components/client/Header"
import Footer from "../../components/client/Footer"
import Slide from "../../components/client/Slide"
import Product from "../../components/client/Product"
import Style from "../../assets/css/Home.module.css"
import Bg from "../../components/client/BgHome"

function Home(){
    return (
        <div className={Style.bodyHome}>
            <Header />
            <Bg />
            <Slide />
            {/* <Product /> */}
            <Footer />
        </div>
    )
}

export default Home