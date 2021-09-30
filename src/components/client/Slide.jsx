import sample3 from '../../assets/img/3.png'
import sample1 from '../../assets/img/1.png'
import sample2 from '../../assets/img/2.png'
import Styles from '../../assets/css/Home.module.css'
import Carousel from 'react-bootstrap/Carousel'

function Slide(){


    return (
        <div className={Styles.slide}>
            <div className="container">
                <div className="row">
                        <Carousel variant="dark">
                            <Carousel.Item interval={2000}>
                                    <img
                                    className={Styles.slidePict}
                                    style={{"height" : "400px"}}
                                    src={sample1}
                                    alt="First slide"
                                    />
                                
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                    <img
                                    className={Styles.slidePict}
                                    style={{"height" : "400px"}}
                                    src={sample2}
                                    alt="Second slide"
                                    />
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                    <img
                                    className={Styles.slidePict}
                                    style={{"height" : "400px"}}
                                    src={sample3}
                                    alt="Third slide"
                                    />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        // </div>
    )
}

export default Slide