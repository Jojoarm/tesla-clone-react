import React from 'react'

import Accesories from '../images/Desktop-Accessories.jpg'
import ModelS from '../images/ms-homepage-desktop.jpg'
import Model3 from '../images/Desktop-Model3.jpeg'
import ModelX from '../images/Desktop-ModelX.jpeg'
import ModelY from '../images/Desktop-ModelY.jpeg'
import SolarPanel from '../images/Desktop-SolarPanels.jpeg'
import SolarRoof from '../images/Desktop-SolarRoof.jpeg'
import Section from './Section'

const sections = [
    {
        title:"Model S",
        description:"Order Online for TouchLess Delivery",
        descLink: '',
        backgroundImg: ModelS,
        leftBtnTxt:"CUSTOM ORDER",
        leftBtnLink:"",
        rightBtnTxt:"EXISTING INVENTORY",
        rightBtnLink:"",
        twoButtons:"true",
        first: 'true'
    },
    {
        title:"Model Y", 
        description:"Order Online for TouchLess Delivery",
        descLink: '',
        backgroundImg: ModelY,
        leftBtnTxt:"CUSTOM ORDER",
        leftBtnLink:"",
        rightBtnTxt:"EXISTING INVENTORY",
        rightBtnLink:"",
        twoButtons: 'true'
    },
    {
        title:"Model 3", 
        description:"Order Online for TouchLess Delivery",
        descLink: '',
        backgroundImg: Model3,
        leftBtnTxt:"CUSTOM ORDER",
        leftBtnLink:"",
        rightBtnTxt:"EXISTING INVENTORY",
        rightBtnLink:"",
        twoButtons: 'true',
    },
    {
        title:"Model X", 
        description:"Order Online for TouchLess Delivery",
        descLink: '',
        backgroundImg: ModelX,
        leftBtnTxt:"CUSTOM ORDER",
        leftBtnLink:"",
        rightBtnTxt:"EXISTING INVENTORY",
        rightBtnLink:"",
        twoButtons: 'true',
    },
    {
        title:"Lowest Cost Solar Panels in America", 
        description:"Money-back guarantee",
        descLink: '',
        backgroundImg: SolarPanel,
        leftBtnTxt:"ORDER NOW",
        leftBtnLink:"",
        rightBtnTxt:"LEARN MORE",
        rightBtnLink:"",
        twoButtons: 'true',
    },
    {
        title:"Solar for New Roofs", 
        description:"Solar Roof Costs Less Than a New Roof Plus Solar Panels",
        descLink: '',
        backgroundImg: SolarRoof,
        leftBtnTxt:"ORDER NOW",
        leftBtnLink:"",
        rightBtnTxt:"LEARN MORE",
        rightBtnLink:"",
        twoButtons: 'true',
    },
    {
        title:"Accessories", 
        description:"",
        descLink: '',
        backgroundImg: Accesories,
        leftBtnTxt:"SHOP NOW",
        leftBtnLink:"",
    }
]

const Home = () => {
    return (
        <div className="sections__container">
            {sections.map(section => (
                <Section 
                    title={section.title}
                    description={section.description}
                    descLink={section.descLink}
                    backgroundImg={section.backgroundImg}
                    leftBtnTxt={section.leftBtnTxt}
                    leftBtnLink={section.leftBtnLink}
                    rightBtnTxt={section.rightBtnTxt}
                    rightBtnLink={section.rightBtnLink}
                    twoButtons={section.twoButtons}
                    first={section.first}    
                />
            ))}
        </div>

    )
}

export default Home
