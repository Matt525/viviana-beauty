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
            <div data-aos-mirror="true" data-aos="fade" data-aos-delay="1000" className="aboutParent" style={{backgroundColor: '#F7F4ED'}}>
                    <div data-aos="fade-up" data-aos-delay="1200" className="topAboutDiv">
                            <h1 className="aboutText">ABOUT VIVIANA 
                                    <br/>
                                    BEAUTYx CO.
                            </h1>
                            <h2 data-aos="fade-up" data-aos-delay="1400" className="aboutInfo">We are your ultimate source of the best health and beauty products in the market. We are advocates of true beauty and only carry products that we believe in.
                                        <br />
                                <h5 id="learnMore">Learn More &#8594;</h5>
                            
                            </h2>
                            
                
                            
                    </div>
                    <img data-aos="fade-up" data-aos-delay="1600" alt="about pic of chocolate" src={aboutPic} className="bottomAboutDiv" />
            </div>
            
        </div>
    )
}

