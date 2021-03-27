import React from 'react'
import Header from './components/Header'
import './App.css'

import Accesories from './images/Desktop-Accessories.jpg'
import ModelS from './images/ms-homepage-desktop.jpg'
import Model3 from './images/Desktop-Model3.jpeg'
import ModelX from './images/Desktop-ModelX.jpeg'
import ModelY from './images/Desktop-ModelY.jpeg'
import SolarPanel from './images/Desktop-SolarPanels.jpeg'
import SolarRoof from './images/Desktop-SolarRoof.jpeg'
import Section from './components/Section'


function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__sections">
        <Section 
          title="Model S" 
          description="Order Online for TouchLess Delivery"
          descLink= ''
          backgroundImg={ModelS}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="EXISTING INVENTORY"
          rightBtnLink=""
          twoButtons="true"
          first
        />
        <Section 
          title="Model Y" 
          description="Order Online for TouchLess Delivery"
          descLink= ''
          backgroundImg={ModelY}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="EXISTING INVENTORY"
          rightBtnLink=""
          twoButtons
        />
        <Section 
          title="Model 3" 
          description="Order Online for TouchLess Delivery"
          descLink= ''
          backgroundImg={Model3}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="EXISTING INVENTORY"
          rightBtnLink=""
          twoButtons
        />
        <Section 
          title="Model X" 
          description="Order Online for TouchLess Delivery"
          descLink= ''
          backgroundImg={ModelX}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="EXISTING INVENTORY"
          rightBtnLink=""
          twoButtons
        />
        <Section 
          title="Lowest Cost Solar Panels in America" 
          description="Money-back guarantee"
          descLink= ''
          backgroundImg={SolarPanel}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons
        />
        <Section 
          title="Solar for New Roofs" 
          description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          descLink= ''
          backgroundImg={SolarRoof}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons
        />
        <Section 
          title="Accessories" 
          description=""
          descLink= ''
          backgroundImg={Accesories}
          leftBtnTxt="SHOP NOW"
          leftBtnLink=""
          // rightBtnTxt=""
          // rightBtnLink=""
        />
      </div>
    </div>
  )
}

export default App
