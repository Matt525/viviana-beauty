import React from 'react'
import {useEffect, useState, useRef} from 'react';

export default function Fader(props) {
    
    const [isVisible, setVisible] = useState(false);

    const domRef = useRef();
  
  
    // useEffect triggers after component mount 
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
    }, []);
  
  
    return (
        <div className={`fade-in-section ${isVisible ? "is-visible" : ""}`} 
        ref={domRef}>
                {props.children}
        </div>
    )
}
