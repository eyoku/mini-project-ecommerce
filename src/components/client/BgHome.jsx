import Bg from "../../assets/img/bg.jpg";
import Styles from "../../assets/css/Home.module.css";

function BgHome() {
    return (
        <div>
            <div className="card">
                <img src={Bg} className={Styles.bgImg} />
                <div className="card-img-overlay">
                    <div className={Styles.bgTitle}>
                        <div className={Styles.textBlock}>
                            <h1 className="card-title text-center">
                                Welcome to Sapeda Official Store
                            </h1>
                            <p className="card-text text-center">
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BgHome;
