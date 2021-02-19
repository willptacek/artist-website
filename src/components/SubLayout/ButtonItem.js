import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export class ButtonItem extends Component {
  render() {
    return (
      <a href={this.props.link} className="icon" target="_blank">
        <FontAwesomeIcon icon={this.props.icon} />
      </a>
    );
  }
}

export default ButtonItem;
