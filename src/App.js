import React from 'react';
import './App.css';
import { Route ,Switch } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import Projects from './contents/Projects';

function App() {
return (
    <div className="App">
      <Navbar />
      <Switch>
        {/* Route for Home.js contents */}
        <Route exact path="/" component={Home} />

        {/* Route for About.js contents */}
        <Route path="/about" component={About} />
    
        {/* Route for Education.js contents */}
        <Route path="/education" component={Education} />
          
        {/* Route for Skills.js contents */}
        <Route path="/skills" component={Skills} />
        
        {/* Route for Contact.js contents */}
        <Route path="/contact" component={Contact} />
          
        {/* Route for Projects.js contents */}
        <Route path="/projects" component={Projects} />
      </Switch>
    </div>
)
}
export default App;