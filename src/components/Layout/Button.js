import React, { Component } from 'react';
import ButtonItem from '../SubLayout/ButtonItem';

export class Button extends Component {
  render() {
    console.log(this.props.text);
    return (
      <div
        className="button-container"
        style={{ backgroundImage: this.props.image, backgroundSize: 'cover' }}
      >
        <div className="button-text">{this.props.text}</div>
        <div className="button">
          {this.props.buttonArray.map((buttonItem) => (
            <ButtonItem
              key={buttonItem.link}
              icon={buttonItem.icon}
              link={buttonItem.link}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Button;
