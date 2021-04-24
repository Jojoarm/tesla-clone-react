import React, { useState } from 'react'
import './Header2.css'
import teslaLogo from '../../images/tesla-logo-white.png'
import { Link } from 'react-router-dom'


function Header2() {
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
                <Link to="/" style={{textDecoration: 'none', color: '#373838'}}>
                    <div className="header__logo">
                        <img src={`${teslaLogo}`} alt="logo" />
                    </div>
                </Link>
                <div className="header__models2">
                    <h3>MODEL S</h3>
                    <Link className="header__link" to="/model-3" style={{textDecoration: 'none', color: 'white'}}>
                        <h3>MODEL 3</h3>
                    </Link>
                    <h3>MODEL X</h3>
                    <h3>MODEL Y</h3>
                    <h3>SOLAR ROOF</h3>
                    <h3>SOLAR PANELS</h3>
                </div>
                <div className="header__menu2">
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
                <div onClick={toggleClass} className={`navbar__toggle2 ${isActive ? "is-active" : ""}`}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                {/* <!-- Responsive Views --> */}
            <div className={`header__models-res1 ${showMenu ? "show__menu" : ""}`}>
                <h3>MODEL S</h3>
                <Link className="header__linkMobile" to="/model-3" style={{textDecoration: 'none', color: '#373838'}}>
                    <h3>MODEL 3</h3>
                </Link>
                <h3>MODEL X</h3>
                <h3>MODEL Y</h3>
                <h3>SOLAR ROOF</h3>
                <h3>SOLAR PANELS</h3>
                <div onClick={moreOptions} className={`header__link-more`}> <h4>MORE</h4> <i className="fas fa-chevron-right"></i> </div>
                <h3>UNITED STATES</h3>
            </div>
            <div className={`menu__container-more ${showLess ? "show__menu" : ""} `}>
                <div onClick={moreOptions} className="header__links-less"><h3>MORE</h3><i className="fas fa-chevron-down"></i></div>
                <div className="menu__name-more">EXISTING INVENTORY</div>
                <div className="menu__name-more">USED INVENTORY</div>
                <div className="menu__name-more">TRADE-IN</div>
                <div className="menu__name-more">CYBERTRUCK</div>
                <div className="menu__name-more">ROADSTER</div>
                <div className="menu__name-more">SEMI</div>
                <div className="menu__name-more">CHARGING</div>
                <div className="menu__name-more">POWERWALL</div>
                <div className="menu__name-more">COMMERCIAL SOLAR</div>
            </div>
            {/* <!-- Mobile View --> */}
            <div className={`menu__container-mobile ${showMenu ? "show__menu" : ""} `}>           
                <div className="menu__name-more">MODEL S</div>
                <Link className="header__linkMobile" to="/model-3" style={{textDecoration: 'none', color: '#373838'}}>
                    <h3>MODEL 3</h3>
                </Link>
                <div className="menu__name-more">MODEL X</div>
                <div className="menu__name-more">MODEL Y</div>
                <div className="menu__name-more">SOLAR ROOF</div>
                <div className="menu__name-more">SOLAR PANELS</div>
                <div className="menu__name-more">EXISTING INVENTORY</div>
                <div className="menu__name-more">USED INVENTORY</div>
                <div className="menu__name-more">TRADE-IN</div>
                <div className="menu__name-more">POWERWALL</div>
                <div className="menu__name-more">COMMERCIAL SOLAR</div>
                <div className="menu__name-more">TEST DRIVE</div>
                <div className="menu__name-more">CHARGING</div>
                <div className="menu__name-more">FIND US</div>
            </div>
            </div>
        </div>
    )
}

export default Header2
