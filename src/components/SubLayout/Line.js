import React, { Component } from 'react';

export class Line extends Component {
  render() {
    return (
      <div
        className="line"
        id={this.props.id}
        style={{
          backgroundColor: this.props.color,
          transform: 'rotate(' + this.props.angle + 'deg)',
          width: this.props.length + '%',
          height: this.props.height + 'px',
        }}
      ></div>
    );
  }
}

export default Line;
