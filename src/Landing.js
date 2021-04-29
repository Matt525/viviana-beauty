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
        <div className="wrapper" data-aos-mirror="true" data-aos="fade" data-aos-delay="1000">
                <img alt="background" src={landingBeauty} className="landingImage" />
                
                <br/>
                <div data-aos-mirror="true" data-aos="fade-up" data-aos-delay="1200" className="title">VIVIANA
                <br/>
                BEAUTY CO.
                </div>
                <small data-aos-mirror="true" data-aos="fade-up" data-aos-delay="1400" className="smallTitle">ONE-STOP HEALTH AND BEAUTY SHOP</small>
        </div>
    )
}
