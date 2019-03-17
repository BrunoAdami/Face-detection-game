
// Created by Bruno Adami Serine in 01/18/2019


import React, { Component } from 'react';
import Signin from './components/Signin/Signin.js';
import Navigat from './components/Navigat/Navigat.js';
import Pict from './components/Pict/Pict.js';
import ImageForm from './components/ImageForm/ImageForm.js';
import Position from './components/Position/Position.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import Register from './components/Register/Register.js'
import './App.css';
import Clarifai from 'clarifai';


const app = new Clarifai.App({
 apiKey: '53a3c7a0e5df491db39492e3cd6c68c2'
});

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
    }
  }

//the generateFaceBox will calculate the locations of the face box 

  generateFaceLocation = (data) => {
    const face = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width); //transforms the string into a number type
    const height = Number(image.height);
    console.log(width, height);
    return {
      leftCol: face.left_col * width,
      topRow: face.top_row * height,
      rightCol: width - (face.right_col * width),
      bottomRow: height - (face.bottom_row * height),
    }
    //note that the coordenates left_col, top_row etc. are givenn in relative size,
    //so we need to do some simple math to get the position of it in px
  }

  generateBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value}); 
  }

  onButtonSubmit = () => {

    this.setState({imageUrl: this.state.input});

    //here I will use the Machine Learning Face detection API

    app.models
    .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.generateBox(this.generateFaceLocation (response)))
    .catch(err => console.log(err));
    // from this response I will get the coordenates of the square around the faces
    }


  render() {
    return (
      <div className="App">
            <Navigat />
            <Pict />
            <ImageForm onInputChange={this.onInputChange} 
                        onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition box={this.state.box} imageUrl = {this.state.imageUrl}/>  
      </div>
    );
  }
}

export default App;
