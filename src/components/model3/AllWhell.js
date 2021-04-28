import React from 'react'
import backgroundImg from '../../images/model-3/lhd-awd-hero-desktop.jpg'
import backgroundImgMobile from '../../images/model-3/lhd-awd-hero-mobile.jpg'
import { AddCircleOutline, Cloud, ExpandLess } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const AllWhell = ({teslaLogo, scrollToTop}) => {
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
                                {/* <i class="fas fa-tachometer-alt"></i> */}
                                <p>2</p>
                            </div>
                            <small className="model__description">Independent motors digitally control torque to the front and rear wheels</small>
                            <small className="model__description2">Independent Motors</small>
                        </div>
                        <div className="model__info">
                            <p>10ms</p>
                            <small className="model__description">Dual motors respond to changing conditions in as little as 10 milliseconds</small>
                            <small className="model__description2">Torque Response</small>
                        </div>
                        <div className="model__info">
                            <p><Cloud /></p>
                             <small className="model__description">Unparalleled traction and control, in all weather conditions</small>
                             <small className="model__description2">All-Weather control</small>
                        </div>                 
                    </div>
            </div>
            <div className="performance__info">
                <div className="performance__buttons">
                    <div className="performance__title">
                        <p>All-Wheel Drive</p>
                        <h2>Dual Motor</h2>
                    </div>
                    <div className="more__info">
                        {/* <AddCircleOutline className="plus__icon" />Learn More */}
                        <div className='order__button'>
                            <a href="#">ORDER NOW</a>
                        </div>
                   </div>
                </div>
                <div className="performance__writeup">
                    <p>Tesla All-Wheel Drive has two independent motors for improved redundancy, each with only one moving part for minimal maintenance and maximum durability. Unlike traditional all-wheel drive systems, they digitally control torque to the front and rear wheels for far better handling and traction control.</p>
                </div>
            </div>
            {/* Mobile View */}
            <div className="performance__info2">
                <div className="performance__buttons2">
                    <div className="performance__title">
                    <p>All-Wheel Drive</p>
                        <h2>Dual Motor</h2>
                    </div>
                    <div className="performance__writeup2">
                    <p>Tesla All-Wheel Drive has two independent motors for improved redundancy, each with only one moving part for minimal maintenance and maximum durability. Unlike traditional all-wheel drive systems, they digitally control torque to the front and rear wheels for far better handling and traction control.</p>
                    </div>
                    <div className="more__info2">
                        {/* <AddCircleOutline className="plus__icon" />Learn More */}
                        <div className='order__button'>
                            <a href="#">ORDER NOW</a>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default AllWhell
