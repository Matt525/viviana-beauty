import React from 'react'
import './CSS/about.css';
import aboutPic from './photoSource/aboutPic.png'

export default function About() {
    return (
        <div>
            <div className="aboutParent">
                    <div className="topAboutDiv">
                            <h1 className="aboutText">ABOUT VIVIANA 
                                    <br/>
                                    BEAUTY CO.
                            </h1>
                            <h2 className="aboutInfo">We are your ultimate source of the best health and beauty products in the market. We are advocates of true beauty and only carry products that we believe in.</h2>
                    </div>
                    <img alt="about pic of chocolate" src={aboutPic} className="bottomAboutDiv" />
            </div>
            
        </div>
    )
}
