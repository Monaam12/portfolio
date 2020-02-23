import React, { Component } from 'react';
import Social from '../components/Social';
class Contact extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Contact Me</h1>
        <h3>
          <i className="fa fa-envelope" arria-hidden='true' />
          Email  :  clemonaam@gmail.com
        </h3>
        <h3>
          <i className="fa fa-phone-square" arria-hidden='true' />
          Phone : +216 26462288
        </h3>
        <Social />
      </div>
    )
  }
}
export default Contact