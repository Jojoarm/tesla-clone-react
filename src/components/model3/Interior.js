import { AddCircleOutline, ExpandLess, ViewCarousel, Wifi } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './Interior.css'
import backgroundImg from '../../images/model-3/lhd-interior-hero-desktop.jpg'


const Interior = ({teslaLogo, scrollToTop}) => {
    return (
        <div className='interior__container'>
            <header>
                    <Link to="/" style={{textDecoration: 'none', color: '#373838'}}>
                        <div className="header__logo">
                            <img src={`${teslaLogo}`} alt="logo" />
                        </div>
                    </Link>
                    <div className="up__icon">
                        <ExpandLess onClick={scrollToTop} className="expand__icon" />
                    </div>
            </header>
            <div className="autopilot__video" style={{backgroundImage: `url(${backgroundImg})`}}>
                <div className="autopilot__info">
                    <h3>15 Inch</h3>
                    <p className="mobile__info">Touchscreen Display</p>
                    <p className="desktop__info">A touchscreen designed to improve over time</p>
                </div>
                <div className="autopilot__info">
                    <h3><Wifi /></h3>
                    <p className="mobile__info">Over-the-air Software Updates</p>
                    <p className="desktop__info">Over-the-air software updates introduce new features, functionality and performance</p>
                </div>
                <div className="autopilot__info">
                    <h3><ViewCarousel /></h3>
                    <p className="mobile__info">All-Glass Roof</p>
                    <p className="desktop__info">An expansive Glass Roof provides more </p>
                </div>
            </div>
            <div className='autopilot__content'>
                <div className="performance__buttons">
                    <div className="performance__title">
                        <p>AutoPilot</p>
                        <h2>Future of Driving</h2>
                    </div>
                    <div className="more__info">
                        <AddCircleOutline className="plus__icon" />Learn More
                        <div className='order__button'>
                            <a href="#">ORDER NOW</a>
                        </div>
                   </div>
                </div>
                <div className="performance__writeup">
                    <p>The inside of Model 3 is unlike any other car. You can use your smartphone as a key, and access all driver controls in the central 15-inch touchscreen. The all-glass roof extends from front to back, creating a sense of openness from every seat.</p>
                </div>
            </div>
            {/* Mobile View */}
            <div className="autopilot__content2">
                <div className="performance__buttons2">
                    <div className="performance__title">
                        <p>Interior</p>
                        <h2>Built Around the Driver</h2>
                    </div>
                    <div className="performance__writeup2">
                        <p>The inside of Model 3 is unlike any other car. You can use your smartphone as a key, and access all driver controls in the central 15-inch touchscreen. The all-glass roof extends from front to back, creating a sense of openness from every seat.</p>
                    </div>
                    <div className="more__info2">
                        <AddCircleOutline className="plus__icon" />Learn More
                        <div className='order__button'>
                            <a href="#">ORDER NOW</a>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Interior
