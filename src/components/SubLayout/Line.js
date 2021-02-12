import React, { Component } from 'react';

export class Line extends Component {
  render() {
    return (
      <div
        className="line"
        style={{
          backgroundColor: this.props.color,
          transform: 'rotate(' + this.props.angle + 'deg)',
        }}
      ></div>
    );
  }
}

export default Line;
