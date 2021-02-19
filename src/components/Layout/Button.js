import React, { Component } from 'react';
import ButtonItem from '../SubLayout/ButtonItem';

export class Button extends Component {
  render() {
    console.log(this.props.buttonArray);
    return (
      <div className="button">
        {this.props.buttonArray.map((buttonItem) => (
          <ButtonItem
            key={buttonItem.link}
            icon={buttonItem.icon}
            link={buttonItem.link}
          />
        ))}
      </div>
    );
  }
}

export default Button;
