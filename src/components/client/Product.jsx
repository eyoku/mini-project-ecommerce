import Styles from '../../assets/css/Home.module.css'

function Product (){


    return(
        <div className={Styles.product}>
            <div className="container bootstrap snipets">
                <div className={Styles.title}>
                    <h1 className="text-center text-muted">Product Catalog</h1>
                </div>
                <div className="row flow-offset-1">
                    <div className="col-xs-6 col-md-4">
                        <div className="product tumbnail thumbnail-3"><a href="#"><img src="https://via.placeholder.com/350x280/FFB6C1/000000" alt=""/></a>
                            <div className="caption">
                            <h6><a href="#">Short Sleeve T-Shirt</a></h6><span className="price">
                                <del>$24.99</del></span><span className="price sale">$12.49</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-4">
                        <div className="product tumbnail thumbnail-3"><a href="#"><img src="https://via.placeholder.com/350x280/87CEFA/000000" alt=""/></a>
                            <div className="caption">
                            <h6><a href="#">Short Sleeve T-Shirt</a></h6><span className="price">
                                <del>$24.99</del></span><span className="price sale">$12.49</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-4">
                        <div className="product tumbnail thumbnail-3"><a href="#"><img src="https://via.placeholder.com/350x280/FF7F50/000000" alt=""/></a>
                            <div className="caption">
                            <h6><a href="#">Short Sleeve T-Shirt</a></h6><span className="price">$12.49</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-4">
                        <div className="product tumbnail thumbnail-3"><a href="#"><img src="https://via.placeholder.com/350x280/20B2AA/000000" alt=""/></a>
                            <div className="caption">
                            <h6><a href="#">Short Sleeve T-Shirt</a></h6><span className="price">
                                <del>$24.99</del></span><span className="price sale">$12.49</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-4">
                        <div className="product tumbnail thumbnail-3"><a href="#"><img src="https://via.placeholder.com/350x280/8A2BE2/000000" alt=""/></a>
                            <div className="caption">
                            <h6><a href="#">Short Sleeve T-Shirt</a></h6><span className="price">
                                <del>$24.99</del></span><span className="price sale">$12.49</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-4">
                        <div className="product tumbnail thumbnail-3"><a href="#"><img src="https://via.placeholder.com/350x280/6495ED/000000" alt=""/></a>
                            <div className="caption">
                            <h6><a href="#">Short Sleeve T-Shirt</a></h6><span className="price">
                                <del>$24.99</del></span><span className="price sale">$12.49</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-4">
                        <div className="product tumbnail thumbnail-3"><a href="#"><img src="https://via.placeholder.com/350x280/00008B/000000" alt=""/></a>
                            <div className="caption">
                            <h6><a href="#">Short Sleeve T-Shirt</a></h6><span className="price">$12.49</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-4">
                        <div className="product tumbnail thumbnail-3"><a href="#"><img src="https://via.placeholder.com/350x280/9932CC/000000" alt=""/></a>
                            <div className="caption">
                            <h6><a href="#">Short Sleeve T-Shirt</a></h6><span className="price">
                                <del>$24.99</del></span><span className="price sale">$12.49</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-4">
                        <div className="product tumbnail thumbnail-3"><a href="#"><img src="https://via.placeholder.com/350x280/FF69B4/000000" alt=""/></a>
                            <div className="caption">
                            <h6><a href="#">Short Sleeve T-Shirt</a></h6><span className="price">
                                <del>$24.99</del></span><span className="price sale">$12.49</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product