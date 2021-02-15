import React, { Component } from 'react';

export class Image extends Component {
  render() {
    return (
      <img
        className="background-img"
        src={this.props.src}
        style={this.props.style}
        alt={this.props.key}
      ></img>
    );
  }
}

export default Image;
