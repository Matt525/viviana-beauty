
import Landing from './Landing';
import About from './About';
import ReactDOM from 'react-dom'
import ReactFullpage from '@fullpage/react-fullpage';
import './CSS/index.css'
import React from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

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
                
            </ReactFullpage.Wrapper>
        
        );
      }}
      />
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

