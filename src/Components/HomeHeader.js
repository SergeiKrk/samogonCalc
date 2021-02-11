import React from 'react'
import logo from '../assets/img/kalkulyator-samogonshchika.png'

const HomeHeader = () => {
    return(
        <div>
            <header className="masthead bg-primary text-white text-center">
                <div className="container d-flex align-items-center flex-column">
                    <img 
                                src={logo}
                                className="masthead-avatar mb-5"
                                alt="калькулятор самогонщика"
                            />
                    <h1 className="masthead-heading text-uppercase mb-0">Start Bootstrap</h1>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </header>
        </div>
    )
}

export default HomeHeader;