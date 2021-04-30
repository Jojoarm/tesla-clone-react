import React from 'react'
import './Model3.css'
import backgroundImg from '../../images/model-3/model-3-hero-desktop.jpg'
import teslaLogo from '../../images/tesla-logo-png-20.png'
import ModelBody from './ModelBody'
import Performance from './Performance'
import performanceImg from '../../images/model-3/lhd-performance-hero-desktop.jpg'
import AllWhell from './AllWhell'
import Range from './Range'
import AutoPilot from './AutoPilot'

const modelInfo = [
    {
        backgroundImg: performanceImg,
        description: 'Quickest acceleration—from zero to 60 mph* in as little as 3.1 seconds',
        descriptionMobile: '0-60 mph*',
        description2: 'Improved handling and aerodynamics allow for a top speed of 162 mph',
        descriptionMobile2: 'Top Speed',
        description3: 'Dual Motor All-Wheel Drive instantly controls traction and torque, in all weather conditions',
        descriptionMobile3: 'Dual Motor',
        performanceTitle: 'Performance',
        titleMore: 'Quickest Acceleration',
        twoButtons: 'true',
        performanceWriteup: 'Model 3 comes with the option of dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes and lowered suspension for total control, in all weather conditions. And a carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds.'
    },
    
]

const Model3 = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div className="model__box">
            <div className="model" style={{
                backgroundImage: `url(${backgroundImg})`

            }}>
                <div className="model__container">
                    <div className="model__text">
                        <h1>Model 3</h1>
                        {/* <div className="section__desc">
                            <p>{description}</p>
                        </div> */}
                    </div>
                    <div className="model__end">
                        <div className="model__buttons">
                            <div className="model__details">
                                <div className="model__info">
                                    <div className="model__speed">
                                    <i class="fas fa-tachometer-alt"></i>
                                        <p>3.1s</p>
                                    </div>
                                    <small>0-60mph*</small>
                                </div>
                                <div className="model__info">
                                    <p>353mi</p>
                                    <small>Range(EPA est)</small>
                                </div>
                                <div className="model__info">
                                    <p>AWD</p>
                                    <small>Dual Door</small>
                                </div>                 
                            </div>
                            <div className='model__button'>
                                <a href="#">ORDER NOW</a>
                            </div>
                        </div>
                        
                        <div className="model__expand">
                            <i className="fas fa-chevron-down"></i>
                        </div>
                    </div>
                </div>
            </div>
            <ModelBody scrollToTop={scrollToTop} teslaLogo={teslaLogo} />
            <Performance scrollToTop={scrollToTop} teslaLogo={teslaLogo} />
            <AllWhell scrollToTop={scrollToTop} teslaLogo={teslaLogo} />
            <Range scrollToTop={scrollToTop} teslaLogo={teslaLogo} />
            <AutoPilot scrollToTop={scrollToTop} teslaLogo={teslaLogo} />
        </div>
    )
}

export default Model3
