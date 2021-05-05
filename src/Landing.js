import React from 'react'
import './CSS/landing.css';
import landingBeauty from './photoSource/Viviana_landing.png'
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Landing() {

    useEffect(() => {
        AOS.init(); 
    }, [])
    
    return (
        <div className="wrapper">
                <img data-aos-mirror="true" data-aos="fade" alt="background" src={landingBeauty} className="landingImage" />
                {/* <img alt="Icon" className="icon" src="https://img.icons8.com/ios/100/000000/shellfish.png"/> */}
                <br/>
                <div data-aos-mirror="true" data-aos="fade-up" className="title">VIVIANA
                <br/>
                BEAUTY CO.
                </div>
                <small data-aos-mirror="true" data-aos="fade-up" data-aos-delay="250" className="smallTitle">ONE-STOP HEALTH AND BEAUTY SHOP</small>
        </div>
    )
}
