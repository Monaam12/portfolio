import React, { Component } from 'react';
import Social from '../components/Social';

class Skills extends Component {
constructor(props) {
  super(props);
  this.state={
  'mySkills':[
    'HTML | CSS',
    'JavaScript : ES6 | AJAX / JSON | ReactJS | NodeJS',
    'PHP : PHP5/7 | OOP | MVC | Design Pattern | Laravel | REST API',
    'MySQL | MongoDB', 'Git / Github'
 ]
  };
}

  render() {
    return (
      <div className="condiv skills">
        <h1 className="subtopic">My Skills</h1>
        <ul>
          {this.state.mySkills.map((value,index)=>{
              return <li key={index}>{value}</li>
          })}
        </ul>
        <Social />
      </div>
    )
  }
}
export default Skills