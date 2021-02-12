import React, { Component } from 'react';
// import Line from '/Users/willp/Documents/Udemy_React/mimideath/src/components/SubLayout/Line';
import PropTypes from 'prop-types';
import Line from '../SubLayout/Line';
import angel from '../img/mmdethangel.png';

//note: to access element of this.props.lines, have to do this.props.lines[0] first
//i.e.: this.props.lines[0][0] = first element of the array
export class Logo extends Component {
  render() {
    return (
      <div className="container">
        <img src={angel} key={angel} alt="mmdethangel" className="logo" />
        {this.props.lines.map((lineProperties) => (
          <Line
            key={lineProperties.angle}
            color={lineProperties.color}
            angle={lineProperties.angle}
          />
        ))}
      </div>
    );
  }
}

Logo.propTypes = {
  lines: PropTypes.array.isRequired,
};

export default Logo;
