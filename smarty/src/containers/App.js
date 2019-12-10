import React, { Component } from 'react';
//import Particles from 'react-particles-js';
import ParticleField from 'react-particles-webgl';
import './App.css';
import Navbar from '../components/navbar/navbar';
import Logo from '../components/logo/logo';
import ImageForm from '../components/imageForm/imageForm';
import Clarifai from 'clarifai';
import { parameters } from './parameters.js';
import FaceDetection from '../components/FaceDetection/FaceDetection'



const app = new Clarifai.App({
  apiKey: 'c0a2b728ea8e4a7a9e564740d36ebf17'
});



class App extends Component {
  constructor() {
    super()
    this.state = {
      input: "",
      image: ""
    }
  }

  oninputchange = (event) => {
    this.setState({ input: event.target.value })
  }

  onsubmit = () => {
    this.setState({ image: this.state.input })
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.image).then(
      function (response) {
        // do something with response
        console.log(response)
      },
      function (err) {
        // there was an error
      }
    );
  }
  render() {
    return (

      <div>
        <div className="dio">
          <ParticleField config={parameters} />
        </div>

        <Navbar />
        <Logo />
        <ImageForm oninputchange={this.oninputchange} onsubmit={this.onsubmit} />
        <FaceDetection image={this.state.image} />
      </div>



    );
  }
}

export default App;
