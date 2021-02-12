import Logo from './components/Layout/Logo';
import './App.css';
import { Component } from 'react';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function populateArray() {
  let lines = [];
  let numOfLines = 230;
  let colorArray = [
    '#1a0129',
    // '#000000',
    // '#d864e1',//pink
    // '#a755ad', //newish pink
    '#85458a',
    '#C0C0C0',

    // '#0f41ff',
    // '#f5680e',
    // '#9536ac',
    // '#d8ad00',
    // '#bd58a4',
    // '#f8c586',
    // '#406309',
    // '#ed0f00',
  ];

  // this for loop initalizes the line array for numOfLines amount of lines to be dynamically rendered later.
  // it gives each element in the array two properties, color which determines the color of the line based on 8 possible values pre determined, and rotate, which determines the rotation of the line, based on the last element of the array.
  for (let i = 0; i < numOfLines; i++) {
    //gen random number from 0-length of array, and assign it to random color
    let randomColorNumber = getRandomInt(colorArray.length);
    let randomColor = colorArray[randomColorNumber];
    //gen random float from 10-20 for angle of line
    let randomAngle = getRandomFloat(0, 90);
    //on odd numbers, the angle will be negative to ensure visual robustness of the line group
    if (i % 2 === 1) {
      randomAngle = randomAngle * -1;
    }
    if (i > 0) {
      // console.log(lines[i - 1]);
    }
    lines.push({ color: randomColor, angle: randomAngle });
  }
  return lines;
}

class App extends Component {
  state = {
    linesArray: populateArray(),
  };
  render() {
    return (
      <div>
        <Logo lines={this.state.linesArray} />
      </div>
    );
  }
}

export default App;
