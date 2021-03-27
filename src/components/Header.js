import React, { useState } from 'react'
import './Header.css'
import teslaLogo from '../images/tesla-logo-png-20.png'

function Header() {
    const [isActive, setIsActive] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const [showLess, setShowLess] = useState(false)

    const toggleClass= () =>{
        setIsActive(!isActive)
        setShowMenu(!showMenu)
    }
    const moreOptions = () => {
        setShowLess(!showLess)
    }
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__logo">
                    <img src={`${teslaLogo}`} alt="logo" />
                </div>
                <div className="header__models">
                    <h3>MODEL S</h3>
                    <h3>MODEL 3</h3>
                    <h3>MODEL X</h3>
                    <h3>MODEL Y</h3>
                    <h3>SOLAR ROOF</h3>
                    <h3>SOLAR PANELS</h3>
                </div>
                <div className="header__menu">
                    <h3>SHOP</h3>
                    <h3>TELSA ACCOUNT</h3>
                </div>
                <div className={`menu__container ${showMenu ? "show__menu" : ""}`}>
                    <div className="menu__name">EXISTING INVENTORY</div>
                    <div className="menu__name">USED INVENTORY</div>
                    <div className="menu__name">TRADE-IN</div>
                    <div className="menu__name">CYBERTRUCK</div>
                    <div className="menu__name">ROADSTER</div>
                    <div className="menu__name">SEMI</div>
                    <div className="menu__name">CHARGING</div>
                    <div className="menu__name">POWERWALL</div>
                    <div className="menu__name">COMMERCIAL SOLAR</div>
                    <div className="menu__name">TEXT DRIVE</div>
                    <div className="menu__name">FIND US</div>
                </div>
                <div onClick={toggleClass} className={`navbar__toggle ${showMenu ? "is-active" : ""}`}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                {/* <!-- Responsive Views --> */}
            <div className={`header__models-res1 ${showMenu ? "show__menu" : ""}`}>
                <a href="#" className="header__links-more"><h3>MODEL S</h3></a>
                <a href="#" className="header__links-more"><h3>MODEL 3</h3></a>
                <a href="#" className="header__links-more"><h3>MODEL X</h3></a>
                <a href="#" className="header__links-more"><h3>MODEL Y</h3></a>
                <a href="#" className="header__links-more"><h3>SOLAR ROOF</h3></a>
                <a href="#" className="header__links-more"><h3>SOLAR PANELS</h3></a>
                <div onClick={moreOptions} className={`header__link-more`}> <h3>MORE</h3> <i className="fas fa-chevron-right"></i> </div>
                <a href="#" className="header__links-more"><h3>UNITED STATES</h3></a>
            </div>
            <div className={`menu__container-more ${showLess ? "show__menu" : ""} `}>
                <div onClick={moreOptions} className="header__links-less"><h3>MORE</h3><i className="fas fa-chevron-down"></i></div>
                <a href="#"><div className="menu__name-more">EXISTING INVENTORY</div></a>
                <a href="#"><div className="menu__name-more">USED INVENTORY</div></a>
                <a href="#"><div className="menu__name-more">TRADE-IN</div></a>
                <a href="#"><div className="menu__name-more">CYBERTRUCK</div></a>
                <a href="#"><div className="menu__name-more">ROADSTER</div></a>
                <a href="#"><div className="menu__name-more">SEMI</div></a>
                <a href="#"><div className="menu__name-more">CHARGING</div></a>
                <a href="#"><div className="menu__name-more">POWERWALL</div></a>
                <a href="#"><div className="menu__name-more">COMMERCIAL SOLAR</div></a>
            </div>
            {/* <!-- Mobile View --> */}
            <div className={`menu__container-mobile ${showMenu ? "show__menu" : ""} `}>           
                <a href="#"><div className="menu__name-more">MODEL S</div></a>
                <a href="#"><div className="menu__name-more">MODEL 3</div></a>
                <a href="#"><div className="menu__name-more">MODEL X</div></a>
                <a href="#"><div className="menu__name-more">MODEL Y</div></a>
                <a href="#"><div className="menu__name-more">SOLAR ROOF</div></a>
                <a href="#"><div className="menu__name-more">SOLAR PANELS</div></a>
                <a href="#"><div className="menu__name-more">EXISTING INVENTORY</div></a>
                <a href="#"><div className="menu__name-more">USED INVENTORY</div></a>
                <a href="#"><div className="menu__name-more">TRADE-IN</div></a>
                <a href="#"><div className="menu__name-more">POWERWALL</div></a>
                <a href="#"><div className="menu__name-more">COMMERCIAL SOLAR</div></a>
                <a href="#"><div className="menu__name-more">TEST DRIVE</div></a>
                <a href="#"><div className="menu__name-more">CHARGING</div></a>
                <a href="#"><div className="menu__name-more">FIND US</div></a>
            </div>
            </div>
        </div>
    )
}

export default Header
