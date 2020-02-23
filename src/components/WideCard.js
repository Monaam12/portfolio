import React, { Component } from 'react';


class WideCard extends Component {
render() {
    return (
      <div className="widecard">
        <div className="compdet">
        <h5>{this.props.title}</h5>
        <h5 className="secondtext">{this.props.where}</h5>
        <h6 className="secondtext">{this.props.from} - {this.props.to}</h6>
        </div>
      </div>
    )
}
}
export default WideCard