import React from 'react'
import Button from './Button'
import './Section.css'

function Section({ title, description, descLink, backgroundImg, leftBtnTxt, leftBtnLink, rightBtnTxt, rightBtnLink, twoButtons, first }) {
    return (
        <div className="section" style={{
            backgroundImage: `url(${backgroundImg})`

        }}>
            <div className="section__container">
                <div className="section__text">
                    <h1>{title}</h1>
                    <div className="section__desc">
                        <p>{description}</p>
                    </div>
                </div>
                <div className="section__end">
                    <div className="section__buttons">
                        <Button imp="primary" text={leftBtnTxt} link={leftBtnLink} />
                        {/* If there is a second button on the page we render it as shown below */}
                        {twoButtons && (
                            <Button imp="secondary" text={rightBtnTxt} link={rightBtnLink} />
                        )}
                    </div>
                    {first && (
                        <div className="section__expand">
                            <i className="fas fa-chevron-down"></i>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Section
