import React from 'react';

const Slider = () => {
    return (
        <center>
            <div id="demo" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.meesho.com/images/pow/supply_banner_desktop.webp" alt="Los Angeles" width="100%" height="50%" />
                        <div className="carousel-caption">
                            <h3>Clothes Store </h3>
                            <p>Here you can buy , that looks good on you</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://rukminim1.flixcart.com/flap/844/140/image/50c0783278a53ccc.jpg?q=50" alt="Chicago" width="1100" height="500" />
                        <div className="carousel-caption">
                            <h3>Chicago</h3>
                            <p>Thank you, Chicago!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://rukminim1.flixcart.com/flap/844/140/image/50c0783278a53ccc.jpg?q=50" alt="New York" width="1100" height="500" />
                        <div className="carousel-caption">
                            <h3>New York</h3>
                            <p>We love the Big Apple!</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        </center>
    );
}

export default Slider;
