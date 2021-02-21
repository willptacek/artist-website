import React, { Component } from 'react';
import AngelImage from '../img/placeholder-images-image_large.png';

export class Angel extends Component {
  render() {
    this.props.glitchAngel();
    return (
      <img src={AngelImage} key={AngelImage} alt="mmdethangel" id="logo" />
    );
  }
}

export default Angel;
