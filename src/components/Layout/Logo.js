import React, { Component } from 'react';
// import Line from '/Users/willp/Documents/Udemy_React/mimideath/src/components/SubLayout/Line';
import PropTypes from 'prop-types';
import Line from '../SubLayout/Line';
import Angel from '../Layout/Angel';

//note: to access element of this.props.lines, have to do this.props.lines[0] first
//i.e.: this.props.lines[0][0] = first element of the array

export class Logo extends Component {
  render() {
    return (
      <div id="logo-and-lines-container" onMouseMove={this.props.moveLines}>
        <Angel glitchAngel={this.props.glitchAngel} />
        {this.props.lines.map((lineProperties) => (
          <Line
            key={lineProperties.angle}
            color={lineProperties.color}
            angle={lineProperties.angle}
            length={lineProperties.length}
            height={lineProperties.height}
            id={lineProperties.id}
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
