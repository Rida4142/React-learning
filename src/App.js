import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import Functionclick from './components/Functionclick';
import Classclick from './components/Classclick';
import EventBind from './components/EventBind';
import Parentcomp from './components/Parentcomp';
import Usergreeting from './components/Usergreeting';
import NameList from './components/NameList';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA.js';
import RefsDemo from './components/RefsDemo.js';
import Toggle from './components/Toggle.js';
import Fruits from './components/Fruits.js';
import EvenChecker from './components/EvenChecker.js';
import FRParent from './components/FRParent.js';
import PortalDemo from './components/PortalDemo.js';
import Hero from './components/Hero.js';
import ErrorBoundary from './components/ErrorBoundary.js';
import ClickCounter from './components/ClickCounter.js';
import HoverCounter from './components/HoverCounter.js';
import RenderCounter from './components/RenderCounter.js';

function App() {

  return (
    <div className="App">
       <RenderCounter render={(count,countIncrement)=>(
          <ClickCounter count={count} countIncrement={countIncrement} />
       )
       }
      />
       <RenderCounter render={(count,countIncrement)=>(
          <HoverCounter count={count} countIncrement={countIncrement} />
       )
       }
      />
     
       {/* <ErrorBoundary>
        <Hero heroname={'Batman'}/>
      <Hero heroname={'Spiderman'} />
      <Hero heroname={'joker'} />
       </ErrorBoundary> */}
      
      {/* <PortalDemo /> */}
      {/* <FRParent /> */}
      {/* <EvenChecker /> */}
      {/* <Fruits /> */}
      {/* <Toggle /> */}
      {/* <RefsDemo />

      <LifecycleA />
       <Form />
      <NameList></NameList>
       <Usergreeting />
       <Parentcomp />
      <EventBind />
      <Functionclick></Functionclick>
      <Classclick />
      <Counter />
      <Message />
      <Greet name="Rida" hero="Super Lady">
        <p>
          hi, how are you all doing,I'm good
        </p>
      </Greet>
       <Greet name="Laiba" hero="Crazy Woman">
        <button>Click me</button>
       </Greet>
       <Greet name="Areena" hero="Mad Girlie"/>
      <Welcome  name="Rida" hero="Super Lady" >
        <p>
          hi, how are you all doing,I'm good

        </p>
      </Welcome>
      <Welcome name="Laiba" hero="Crazy Woman" />
      <Welcome name="Areena" hero="Mad Girlie" /> */}
    </div>
  );
}

export default App;
