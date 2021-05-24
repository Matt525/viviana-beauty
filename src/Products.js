import React from 'react'
import './CSS/products.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from './photoSource/img1.png'
import img2 from './photoSource/img2.png'
import img3 from './photoSource/img3.png'

export default function Products() {
    return (
        <div data-aos-mirror="true" data-aos="fade" data-aos-delay="1000" className="wrapper">
            
    
           <div className="left" data-aos="fade-up" data-aos-delay="1050">
               <span>
                    <ul>
                            <li>
                                <h1 className="productHeader">Product<br />Categories</h1>
                            </li>
                    
                            <li>
                                <h3>To make things easier, we've gathered our favorite products from our favorite brands. </h3>
                            </li>
                    </ul>
                </span>
           </div>
           <div className="right">
               
               <div className="imgDiv" data-aos="fade-up" data-aos-delay="1100">
                    <img className="imgs" src={img1} />
               </div>

               <div className="imgDiv" data-aos="fade-up" data-aos-delay="1300">
                    <img className="imgs" src={img2} />
               </div>

               <div className="imgDiv" data-aos="fade-up" data-aos-delay="1500">
                    <img className="imgs"src={img3} />
               </div>
           </div>


        </div>
    )
}
