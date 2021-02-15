import Logo from './components/Layout/Logo';
import Background from './components/Layout/Background';
import Chyron from './components/Layout/Chyron';
import './App.css';
import { Component, Fragment } from 'react';
//this sucks LOL but i cant figure out how to do it dynamically because of some weird react thing soo.... xD
import image1 from './components/img/mimibackgroundphotos/1.png';
import image2 from './components/img/mimibackgroundphotos/2.png';
import image3 from './components/img/mimibackgroundphotos/3.png';
import image4 from './components/img/mimibackgroundphotos/4.png';
import image5 from './components/img/mimibackgroundphotos/5.png';
import image6 from './components/img/mimibackgroundphotos/6.png';
import image7 from './components/img/mimibackgroundphotos/7.png';
import image8 from './components/img/mimibackgroundphotos/8.png';
import image9 from './components/img/mimibackgroundphotos/9.png';
import image10 from './components/img/mimibackgroundphotos/10.png';
import image11 from './components/img/mimibackgroundphotos/11.png';
import image12 from './components/img/mimibackgroundphotos/12.png';
import image13 from './components/img/mimibackgroundphotos/13.png';
import image14 from './components/img/mimibackgroundphotos/14.png';
import image15 from './components/img/mimibackgroundphotos/15.png';
import image16 from './components/img/mimibackgroundphotos/16.png';
import image17 from './components/img/mimibackgroundphotos/17.png';
import image18 from './components/img/mimibackgroundphotos/18.png';
import image19 from './components/img/mimibackgroundphotos/19.png';
import image20 from './components/img/mimibackgroundphotos/20.png';
import image21 from './components/img/mimibackgroundphotos/21.png';
import image22 from './components/img/mimibackgroundphotos/22.png';
import image23 from './components/img/mimibackgroundphotos/23.png';
import image24 from './components/img/mimibackgroundphotos/24.png';
import image25 from './components/img/mimibackgroundphotos/25.png';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

//generateStyles returns an array with a length of amountOfImages; within this array will be different
//randomly generated styling for the background images of the site.
//there will be a switch statement that each follow different design philosophies for the images, to ensure
//diversity with the images being used.
//the array used from generateStyles will then be passed into styles in state, then passed into background,
//which will then be mapped into Image.js in background.
//'#1a0129', '#85458a', '#C0C0C0'
//** IDEA - MAYBE MAKE AN API LIKE THIS LOLZ **/
function generateStyles(amountOfImages) {
  let keys = new Array();
  let styles = new Array();
  let style = { color: '' };
  for (let i = 0; i < amountOfImages; i++) {
    keys.push(getRandomInt(4) + 1); //create array of keys, with values 1-4 to be used on the proceeding switch statement
  }
  for (let i = 0; i < amountOfImages; i++) {
    //todo: reconfigure into object
    switch (keys[i]) {
      case 1:
        //#85458a
        // styleString = styles.push(
        //   'invert(33%) sepia(19%) saturate(1941%) hue-rotate(248deg) brightness(90%) contrast(81%)'
        // );
        style = {
          filter:
            'invert(33%) sepia(19%) saturate(1941%) hue-rotate(248deg) brightness(90%) contrast(81%) blur(8px)',
          top: getRandomFloat(-10, -5) + '%',
          left: getRandomFloat(-10, 20) + '%',
          height: getRandomFloat(100, 130) + '%',
          width: getRandomFloat(30, 40) + '%',
          imageRendering: 'pixelated',
        };
        break;
      case 2:
        //#C0C0C0
        style = {
          filter:
            'invert(0%) sepia(65%) saturate(4266%) hue-rotate(262deg) brightness(105%) contrast(103%) blur(5px)',
          top: getRandomFloat(-10, 30) + '%',
          left: getRandomFloat(25, 45) + '%',
          height: getRandomFloat(60, 70) + '%',
          width: getRandomFloat(100, 150) + '%',
          imageRendering: 'pixelated',
        };
        break;
      case 3:
        //#1a0129
        style = {
          filter:
            'invert(3%) sepia(73%) saturate(4366%) hue-rotate(273deg) brightness(96%) contrast(104%) blur(8px)',
          top: getRandomFloat(50, 60) + '%',
          left: getRandomFloat(-60, 20) + '%',
          height: getRandomFloat(20, 70) + '%',
          width: getRandomFloat(120, 180) + '%',
          imageRendering: 'pixelated',
        };
        break;
      case 4:
        //#c0a2c4
        style = {
          filter:
            'invert(78%) sepia(24%) saturate(304%) hue-rotate(246deg) brightness(84%) contrast(88%) blur(11px)',
          top: getRandomFloat(75, 100) + '%',
          left: getRandomFloat(75, 100) + '%',
          height: getRandomFloat(50, 60) + '%',
          width: getRandomFloat(10, 20) + '%',
          imageRendering: 'pixelated',
        };
        break;
      default:
        break;
    }
    styles.push(style);
  }
  return styles;
}

//this function generates amountOfImages amount of random file names from mimibackgroundphotos.
//i.e.: a possible result of populateArrayWithImageFileNames will be an array with
//[1.jpg, 5.jpg, 6.jpg, 4.jpg, 12.jpg,...] etc, etc.
//the purpose of this function is to ensure maximum randomness, keeping in theme
//with all of the visuals of the site.
function populateArrayWithImageFileNames(amountOfImages) {
  let rando;
  let imports = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
  ];
  let arrayOfFileNames = new Array();
  for (let i = 0; i < amountOfImages; i++) {
    //generate a random int from 1 -  until it is not present within the array
    //17 is chosen because there are 17 jpgs (right now) in mimibackgroundphotos
    do {
      rando = getRandomInt(17) + 1;
    } while (arrayOfFileNames.includes(rando));
    arrayOfFileNames.push(imports[i]);
  }
  return arrayOfFileNames;
}

//this function returns the actual array with the literal files in them
// iterates through fileNames to do this
function populateImageArray() {
  let amountOfImages = 25;
  let imageArray = new Array();
  let fileNames = populateArrayWithImageFileNames(amountOfImages);
  for (let i = 0; i < amountOfImages; i++) {
    imageArray.push(fileNames[i]);
  }
  return imageArray;
}

//populates the line array with 10 elements
function populateManipulatedLineArray(initial) {
  let num;
  if (initial > 4) {
    num = initial - 5;
  } else if (initial > 240) {
    num = initial - 100;
  } //250 = numberOfLines
  let array = new Array();
  for (let i = 0; i < 10; i++) {
    array.push(document.getElementById(num));
    num++;
  }
  return array;
}

//function that manipulates the lines in the center of the screen, based on the clientX value.
//can be improved on definitely.
let moveLines = (e) => {
  let logoX = e.clientX % 250;
  let arrayOfLines = populateManipulatedLineArray(logoX);
  try {
    for (let i = 0; i < arrayOfLines.length; i++) {
      arrayOfLines[i].style.width = getRandomFloat(28, 32) + '%';
    }
  } catch (err) {
    // :/
  }
};

//function that always runs on angel.js, 'glitches' out the angel logo based on probability
function glitchAngel() {
  //make this a prop on app level, then pass into glitchAngel()
  //change to set interval
  setInterval(function () {
    let angel = document.getElementById('logo');
    let probability = getRandomInt(20); //0 - 100
    if (probability === 5) {
      let randomSkew = getRandomFloat(-20, 20);
      //there are weird errors that occur sometimes with this function, mostly on angel.style.transform=skew the first time.  not exactly why this is happening, but they are pretty inconsequential.  so i'm just catching them for now
      try {
        angel.style.transform = 'skew(' + randomSkew + 'deg)';
      } catch (err) {}
      setTimeout(function () {
        angel.style.transform = 'skew(0deg)';
      }, 100);
    }
  }, 200);
}

function populateLineArray() {
  let lines = [];
  let numOfLines = 250;
  let colorArray = ['#1a0129', '#85458a', '#C0C0C0'];

  // this for loop initalizes the line array for numOfLines amount of lines to be dynamically rendered later.
  // it gives each element in the array 5 properties chosen at random: color, which is a color from colorArray, angle, calculated randomly which determines the transform: rotate(x) value of the line, length, which determines the length in css % points, height, which determines the height of the line in px, and id, which is used for the event listener function moveLines.
  for (let i = 0; i < numOfLines; i++) {
    //gen random number from 0-length of array, and assign it to random color
    let randomColorNumber = getRandomInt(colorArray.length);
    let randomColor = colorArray[randomColorNumber];
    //gen random float from 10-20 for angle of line
    let randomAngle = getRandomFloat(0, 180);
    //on odd numbers, the angle will be negative to ensure visual robustness of the line group
    if (i % 2 === 1) {
      randomAngle = randomAngle * -1;
    }
    // generate random length, in css percentage points
    let randomLength = getRandomFloat(25, 28); //half this
    let randomHeight = getRandomFloat(1, 6);
    lines.push({
      color: randomColor,
      angle: randomAngle,
      length: randomLength,
      height: randomHeight,
      id: i,
    });
  }
  return lines;
}

//need to change state with this event listener
// let body = document.getElementById('root');
// console.log(body);
// body.addEventListener('mousemove', (e) => console.log(e.screenX));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linesArray: populateLineArray(),
      imageArray: populateImageArray(),
      stylesArray: generateStyles(25),
    };
    this.getRandomFloat = getRandomFloat;
    this.moveLines = moveLines;
    this.glitchAngel = glitchAngel;
  }
  render() {
    return (
      <Fragment>
        <Logo
          lines={this.state.linesArray}
          getRandomFloat={this.getRandomFloat}
          moveLines={this.moveLines}
          glitchAngel={this.glitchAngel}
        />
        <Background
          images={this.state.imageArray}
          getRandomFloat={this.getRandomFloat}
          styles={this.state.stylesArray}
        />
        <Chyron />
      </Fragment>
    );
  }
}

export default App;
