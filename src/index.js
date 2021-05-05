
import Landing from './Landing';
import About from './About';
import Products from './Products'; 
import ReactDOM from 'react-dom'
import ReactFullpage from '@fullpage/react-fullpage';
import './CSS/index.css'
import React from 'react';

class App extends React.Component { 


  // componentDidMount(){ 
  //   AOS.init({duration: 1500, delay: 500});
  // }

  
  render() { 
    return (
      <ReactFullpage
      //options
      scrollingSpeed={1800}
      scrollBar={true}
      render={() => {
      return (
        
            <ReactFullpage.Wrapper>
              
                <section className="section"><Landing id="landing" /></section>
                
                <section className="section"><About className="about" /></section>

                <section className="section"><Products className="products" /></section>
                
            </ReactFullpage.Wrapper>
        
        );
      }}
      />
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

