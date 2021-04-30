import React from 'react'
import './AutoPilot.css'
import posterImg from '../../images/model-3/autopilot-poster.png'
import posterImgMobile from '../../images/model-3/autopilot-poster.png'
import autopilotVideo from '../../images/model-3/WCL9WK_autopilot.mp4-2000_QQHSUM.mp4'
import { AddCircleOutline, ExpandLess } from '@material-ui/icons'
import { Link } from 'react-router-dom'


const AutoPilot = ({teslaLogo, scrollToTop}) => {
    return (
        <div className='autopilot__container'>
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
            <div className="autopilot__video">
                <video playsinline autoPlay="autoplay" poster={posterImg} muted loop="loop" id="bgvid">
                    <source src={autopilotVideo} type="video/webm" />
                    <source src={autopilotVideo} type="video/mp4" />
                </video>
                <div className="autopilot__info">
                    <h3>360°</h3>
                    <p className="mobile__info">Degree of Visibility</p>
                    <p className="desktop__info">Rear, side and forward-facing cameras provide maximum visibility</p>
                </div>
                <div className="autopilot__info">
                    <h3>160 m</h3>
                    <p className="mobile__info">of Forward Facing Radar</p>
                    <p className="desktop__info">Forward-facing radar provides a long-range view of distant objects</p>
                </div>
                <div className="autopilot__info">
                    <div className="sensor__number">
                        <span>12</span>
                        <p>UltraSonic Sensors</p>
                    </div>
                    <p className="desktop__info">Detects nearby cars, prevents potential collisions and assists with parking</p>
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
                    <p>Autopilot advanced safety and convenience features are designed to assist you with the most burdensome parts of driving.</p>
                </div>
            </div>
            {/* Mobile View */}
            <div className="autopilot__content2">
                <div className="performance__buttons2">
                    <div className="performance__title">
                        <p>AutoPilot</p>
                        <h2>Future of Driving</h2>
                    </div>
                    <div className="performance__writeup2">
                        <p>Autopilot advanced safety and convenience features are designed to assist you with the most burdensome parts of driving.</p>
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

export default AutoPilot
