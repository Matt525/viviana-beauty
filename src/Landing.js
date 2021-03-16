import React from 'react'
import './CSS/landing.css';
import landingBeauty from './photoSource/Viviana_landing.png'

export default function Landing() {
    return (
        <div className="wrapper">
                <img alt="background" src={landingBeauty} className="landingImage" />
                {/* <img alt="Icon" className="icon" src="https://img.icons8.com/ios/100/000000/shellfish.png"/> */}
                <br/>
                <div className="title">VIVIANA
                <br/>
                BEAUTY CO.
                </div>
                <small className="smallTitle">ONE-STOP HEALTH AND BEAUTY SHOP</small>
        </div>
    )
}
