import React, { Component } from 'react';
import AngelImage from '../img/mmdethangel.png';

export class Angel extends Component {
  render() {
    this.props.glitchAngel();
    // let moveLogo = (e) => {
    //   this.setState({
    //     logoX: (e.pageX / 60) * -1,
    //     logoY: (e.pageY / 60) * -1,
    //   });
    // };
    return (
      <img src={AngelImage} key={AngelImage} alt="mmdethangel" id="logo" />
    );
  }
}

export default Angel;
