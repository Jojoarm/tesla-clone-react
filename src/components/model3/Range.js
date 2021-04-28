import React from 'react'
import backgroundImg from '../../images/model-3/lhd-range-hero-desktop.jpg'
import rangeImg from '../../images/model-3/model-3-range-map.png'
import { AddCircleOutline, ExpandLess } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import './Range.css'

const Range = ({teslaLogo, scrollToTop}) => {
    return (
        <div className="range__container">
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

            <div className="range__max">
                <div className="range__image2" style={{
                    backgroundImage: `url(${backgroundImg})`}}>
                        <div className="range__details">
                            <div className="model__info">
                                <div className="model__speed">
                                    {/* <i class="fas fa-tachometer-alt"></i> */}
                                    <p>335mi</p>
                                </div>
                                <small className="model__description">Go anywhere with up to 353 mi of estimated range on a single charge</small>
                                <small className="model__description2">Range(EPA est)</small>
                            </div>
                            <div className="model__info">
                                <p>15min</p>
                                <small className="model__description">Recharge up to 175 mi in 15 minutes at Supercharger locations</small>
                                <small className="model__description2">Recharge 175mi</small>
                            </div>
                            <div className="model__info">
                                <p>20,000+</p>
                                <small className="model__description">Superchargers placed along well-traveled routes around the world</small>
                                <small className="model__description2">Superchargers</small>
                            </div>                 
                        </div>
                </div>
                
                    <div className="range__buttons3">
                        <div className="range__title">
                            <p>Range</p>
                            <h2>Go Anywhere</h2>
                        </div>
                        <div className="range__writeup3">
                            <p>Model 3 is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 20,000 Superchargers worldwide, with six new locations opening every week.</p>
                        </div>
                        {/* <div className="map__img">
                            <img src={rangeImg} alt="map description" />
                        </div> */}
                        <div className="map__img" style={{backgroundImage: `url(${rangeImg})`}}>
                            <div className="more__info3">
                                <AddCircleOutline className="plus__icon" />Learn More
                                <div className='order__button'>
                                    <a href="#">ORDER NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>

            {/* Max-Width: 1200px */}
            <div className='range__min'>
                <div className="range__image" style={{
                        backgroundImage: `url(${backgroundImg})`}}>
                            <div className="range__details">
                                <div className="model__info">
                                    <div className="model__speed">
                                    {/* <i class="fas fa-tachometer-alt"></i> */}
                                    <p>335mi</p>
                                </div>
                                <small className="model__description">Go anywhere with up to 353 mi of estimated range on a single charge</small>
                                <small className="model__description2">Range(EPA est)</small>
                            </div>
                            <div className="model__info">
                                <p>15min</p>
                                <small className="model__description">Recharge up to 175 mi in 15 minutes at Supercharger locations</small>
                                <small className="model__description2">Recharge 175mi</small>
                            </div>
                            <div className="model__info">
                                <p>20,000+</p>
                                <small className="model__description">Superchargers placed along well-traveled routes around the world</small>
                                <small className="model__description2">Superchargers</small>
                            </div>                 
                        </div>
                </div>
                <div className="range__info">
                    <div className="range__buttons">
                        <div className="range__title">
                            <p>Range</p>
                            <h2>Go Anywhere</h2>
                        </div>
                        <div className="more__info">
                            <AddCircleOutline className="plus__icon" />Learn More
                            <div className='order__button'>
                                <a href="#">ORDER NOW</a>
                            </div>
                    </div>
                    </div>
                    <div className="range__writeup">
                        <p>Model 3 is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 20,000 Superchargers worldwide, with six new locations opening every week.</p>
                    </div>
                </div>

                {/* Mobile View */}
                <div className="range__info2">
                    <div className="range__buttons2">
                        <div className="range__title">
                            <p>Range</p>
                            <h2>Go Anywhere</h2>
                        </div>
                        <div className="range__writeup2">
                            <p>Model 3 is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 20,000 Superchargers worldwide, with six new locations opening every week.</p>
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
        </div>
    )
}

export default Range
