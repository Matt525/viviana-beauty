
import Landing from './Landing';
import About from './About';
<<<<<<< HEAD
import Products from './Products'; 
=======
import Products from './Products';
>>>>>>> 2d9267a5eb9f7543c97ce64212215c2e98c81103
import ReactDOM from 'react-dom'
import ReactFullpage from '@fullpage/react-fullpage';
import './CSS/index.css'
import React from 'react';
<<<<<<< HEAD
=======
import './CSS/globalStyles.css'
>>>>>>> 2d9267a5eb9f7543c97ce64212215c2e98c81103

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
      fadeEffect={true}
      render={() => {
      return (
        <>
        <section className="section"><Landing id="landing" /></section>
                
            <ReactFullpage.Wrapper>
              
         
                <section className="section"><About className="about" /></section>

<<<<<<< HEAD
                <section className="section"><Products className="products" /></section>
=======
                <section className="section"><Products className="about" /></section>
>>>>>>> 2d9267a5eb9f7543c97ce64212215c2e98c81103
                
            </ReactFullpage.Wrapper>
            </>
        
        );
      }}
      />
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

