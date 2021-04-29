import './CSS/about.css';
import aboutPic from './photoSource/aboutPic.png'
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About(){

    useEffect(() => {
        AOS.init({duration: 700, fadingEffect: true});
    }, []);

    return (
        <div>
            <div className="aboutParent" >
                    <div data-aos="fade-up" data-aos-delay="250" className="topAboutDiv">
                            <h1 className="aboutText">ABOUT VIVIANA 
                                    <br/>
                                    BEAUTY CO.
                            </h1>
                            <h2 data-aos="fade-up" data-aos-delay="300" className="aboutInfo">We are your ultimate source of the best health and beauty products in the market. We are advocates of true beauty and only carry products that we believe in.</h2>
                    </div>
                    <img data-aos="fade-up" data-aos-delay="400" alt="about pic of chocolate" src={aboutPic} className="bottomAboutDiv" />
            </div>
            
        </div>
    )
}

