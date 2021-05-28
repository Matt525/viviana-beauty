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
               <span id="large-header">
                    <ul style={{textDecoration: 'none'}}>
                            <li>
                                <h1 className="productHeader">Product<br />Categories</h1>
                            </li>
                    
                            <li>
                                <h2>To make things easier, we've gathered our favorite products from our favorite brands. </h2>
                            </li>
                    </ul>
                </span>
           </div>
           <div className="right">
               <div className="imgDiv" data-aos="fade-up" data-aos-delay="1100" style={{flexDirection: 'column'}}>
                    <img onClick={()=>{window.location.href="store"}} className="imgs" src={img1} />
                    <h1>Beauty Products</h1>                    
               </div>

               <div className="imgDiv" data-aos="fade-up" data-aos-delay="1300" style={{flexDirection: 'column'}}>
                    <img className="imgs" src={img2} />
                    <h1>Wellness Products</h1>

               </div>

               <div className="imgDiv" data-aos="fade-up" data-aos-delay="1500" style={{flexDirection: 'column'}}>
                    <img className="imgs"src={img3} />
                    <h1>Health Products</h1>
               </div>
           </div>


        </div>
    )
}
