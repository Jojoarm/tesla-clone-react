import React from 'react'
import './ModelBody.css'
import { Link } from 'react-router-dom'
import { AddCircleOutline, ExpandLess } from '@material-ui/icons'
import backgroundImg1 from '../../images/model-3/model_3_safety_hero.png'
import backgroundImgMobile from '../../images/model-3/model-_3_safety_hero_mobile.png'

const ModelBody = ({teslaLogo, scrollToTop}) => {
    
    return (
        <div className="model__body">
            <div className="model__built">
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
                <div className="model__builtContainer">
                    <div className="safety__info">
                        <div className="safety__title">
                            <p>Safety</p>
                            <h2>Built for Safety</h2>
                        </div>
                        <div className="safety__writeup">
                            <p>Safety is the most important part of the overall Model 3 design. The metal structure is a combination of aluminum and steel, for maximum strength in every area. In a roof-crush test, Model 3 resisted four times its own mass, even with an all-glass roof: that's the same weight as two full-grown African elephants.</p>
                        </div>
                        <div>
                            <div className="learn__more">
                                <AddCircleOutline className="plus__icon" />Learn More
                                <div className='order__button'>
                                    <a href="#">ORDER NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="built__image" style={{ backgroundImage: `url(${backgroundImg1})`}}>
                        <div className="built__part">
                            <div className="line__container">
                                <div className="line"></div>
                                <div className="line__circle"></div>
                            </div>
                            <p>Impact Protection</p>
                        </div>
                        <div className="built__part2">
                            <div className="line__container">
                                <div className="line2"></div>
                                <div className="line__circle"></div>
                            </div>
                            <p>Rigid Structure</p>
                        </div>
                        <div className="built__part3">
                            <div className="line__container">
                                <div className="line__circle"></div>
                                <div className="line2"></div>
                            </div>
                            <p>Very Low Rollover Risk</p>
                        </div>
                    </div>
                </div>

                {/* Max width 1140px */}
                <div className="model__builtContainer2">
                    <div className="built__image2" style={{ backgroundImage: `url(${backgroundImg1})`}}>
                        <div className="built__part02">
                            <div className="line__container2">
                                <div className="line2"></div>
                                <div className="line__circle2"></div>
                            </div>
                            <p>Impact Protection</p>
                        </div>
                        <div className="built__part22">
                            <div className="line__container2">
                                <div className="line22"></div>
                                <div className="line__circle2"></div>
                            </div>
                            <p>Rigid Structure</p>
                        </div>
                        <div className="built__part32">
                            <div className="line__container2">
                                <div className="line__circle2"></div>
                                <div className="line22"></div>
                            </div>
                            <p>Very Low Rollover Risk</p>
                        </div>
                    </div>
                    <div className="safety__info2">
                        <div className="safety__buttons">
                            <div className="safety__title2">
                                <p>Safety</p>
                                <h2>Built for Safety</h2>
                            </div>
                            <div className="learn__more2">
                                <AddCircleOutline className="plus__icon2" />Learn More
                                <div className='order__button2'>
                                    <a href="#">ORDER NOW</a>
                                </div>
                            </div>
                        </div>
                        <div className="safety__writeup2">
                            <p>Safety is the most important part of the overall Model 3 design. The metal structure is a combination of aluminum and steel, for maximum strength in every area. In a roof-crush test, Model 3 resisted four times its own mass, even with an all-glass roof: that's the same weight as two full-grown African elephants.</p>
                        </div>
                    </div>
                </div>


                {/* Mobile View */}
                <div className="model__builtContainer3">
                    <div className="built__image3" style={{ backgroundImage: `url(${backgroundImgMobile})`}}>
                        <div className="built__part03">
                            <p>Impact Protection</p>
                            <div className="line__container3">
                                <div className="line3"></div>
                                <div className="line__circle3"></div>
                            </div>
                        </div>
                        <div className="built__part33">
                            <p>Rigid Structure</p>
                            <div className="line__container3">
                                <div className="line330"></div>
                                <div className="line__circle3"></div>
                            </div>
                        </div>
                        <div className="built__part43">
                            <p>Very Low Rollover Risk</p>
                            <div className="line__container3">
                                <div className="line__circle3"></div>
                                <div className="line33"></div>
                            </div> 
                        </div>
                    </div>
                    <div className="safety__info3">
                        <div className="safety__title3">
                            <p>Safety</p>
                            <h2>Built for Safety</h2>
                        </div>
                        <div className="safety__writeup3">
                            <p>Safety is the most important part of the overall Model 3 design. The metal structure is a combination of aluminum and steel, for maximum strength in every area. In a roof-crush test, Model 3 resisted four times its own mass, even with an all-glass roof: that's the same weight as two full-grown African elephants.</p>
                        </div>
                        <div className="learn__more3">
                            <AddCircleOutline className="plus__icon3" />Learn More
                            <div className='order__button3'>
                                <a href="#">ORDER NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModelBody
