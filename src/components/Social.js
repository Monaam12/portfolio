import React, { Component } from 'react';
class Social extends Component {
render() {
    return (
          <div className="social">
            <a href="https://github.com/Monaam12" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" aria-hidden="true" />
            </a>
            <a href="https://www.facebook.com/LaraMonaam" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f" aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/monaam12/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in" aria-hidden="true" />
            </a>
            <a href="https://medium.com/@clemonaam" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-medium-m" aria-hidden="true" />
            </a>
          </div>
    )
 }
}
export default Social