import React, { Component } from 'react';
import Image from '../SubLayout/Image';

export class Background extends Component {
  //probably: array of images randomly selected from a pool
  //passed into an Image component, upon where they are mutated randomly then rendered
  render() {
    return (
      <div id="background-image-container">
        {this.props.images.map((image, index) => (
          <Image style={this.props.styles[index]} src={image} key={index} />
        ))}
      </div>
    );
  }
}

export default Background;
