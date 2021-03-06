
import Landing from './Landing';
import About from './About';
import ReactDOM from 'react-dom'
import ReactFullpage from '@fullpage/react-fullpage';
import './CSS/index.css'

const App = () => (
  <ReactFullpage
      //options
      scrollingSpeed={1000}
      fadingEffect={true}
      render={() => {
      return (
        
            <ReactFullpage.Wrapper>
              
                <section className="section"><Landing id="landing" /></section>
                
                
                <section className="section"><About className="about"/></section>
                
            </ReactFullpage.Wrapper>
        
        );
      }}
      />
    );

ReactDOM.render(<App />, document.getElementById('root'));

