import React, { Component } from 'react';
import WideCard from '../components/WideCard';
class Education extends Component {
render() {
    return (
      <div className="condiv">
        <h3 className="subtopic">My Experience</h3>
        <WideCard title="FullStack Web Developer" where="freelancer" from="December 2019" to="present"/>
        <WideCard title="PHP Laravel Developer" where="freelancer at Upwork" from="june 2019" to="present"/>
        <WideCard title="Programmable Logic Controller Industrial" where="Kairouan Tobacco Factory -  Internship" from="june 2011" to="July 2011"/>

        <h3 className="subtopic">My Education</h3>
        <WideCard title="Bachelor's degree - Electronics, Electrical Engineering and industrial data" where="Higher Institute of Applied Sciences and Technology of kairouan - ISSAT kairouan" from="September 2009" to="June 2012"/>
        <WideCard title="Technical Sciences" where="High School Dar Lamen Kairouan" from="September 2005" to="June 2009"/>
      </div>
    )
}
}
export default Education