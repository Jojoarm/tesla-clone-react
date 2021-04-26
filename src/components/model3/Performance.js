import React from 'react'
import './Performance.css'
import backgroundImg from '../../images/model-3/lhd-performance-hero-desktop.jpg'
import { AddCircleOutline, ExpandLess } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const Performance = ({teslaLogo, scrollToTop}) => {
    return (
        <div className="performance__container">
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
            <div className="performance__image" style={{
                backgroundImage: `url(${backgroundImg})`}}>
                    <div className="performance__details">
                        <div className="model__info">
                            <div className="model__speed">
                                <i class="fas fa-tachometer-alt"></i>
                                <p>3.1s</p>
                            </div>
                            <small className="model__description">Quickest acceleration—from zero to 60 mph* in as little as 3.1 seconds</small>
                        </div>
                        <div className="model__info">
                            <p>162mph</p>
                            <small className="model__description">Improved handling and aerodynamics allow for a top speed of 162 mph</small>
                        </div>
                        <div className="model__info">
                            <p>AWD</p>
                             <small className="model__description">Dual Motor All-Wheel Drive instantly controls traction and torque, in all weather conditions</small>
                        </div>                 
                    </div>
            </div>
            <div className="performance__info">
                <div className="performance__buttons">
                    <div className="performance__title">
                        <p>Performance</p>
                        <h2>Quickest Acceleration</h2>
                    </div>
                    <div className="more__info">
                        <AddCircleOutline className="plus__icon" />Learn More
                        <div className='order__button'>
                            <a href="#">ORDER NOW</a>
                        </div>
                   </div>
                </div>
                <div className="performance__writeup">
                    <p>Model 3 comes with the option of dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes and lowered suspension for total control, in all weather conditions. And a carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds.</p>
                </div>
            </div>
        </div>
    )
}

export default Performance
