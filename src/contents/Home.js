import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social';
import { ProgressBar } from 'react-mdl';

class Home extends Component {
render() {
    return (
      <div className="condiv home">
        <img src={'/images/monaam12.jpg'} className="profilepic" alt="monaam" />
        <ReactTypingEffect className="typingeffect" text={['Abdel Monaam Aouini','Web Developer']} speed={100} eraseDelay={700}/>
        <ProgressBar indeterminate />
        <Social />
      </div>
    )
    }
    }
export default Home
