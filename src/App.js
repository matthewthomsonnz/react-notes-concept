import React, { Component } from 'react';
import './styles/App.css';
import Bubble from './modules/bubble/Bubble';
import Colour from './modules/colour/Colour';

class App extends Component {
  componentWillMount() {
    this.setState({
      colour: this.randomCSSColour()
    }) 
  }
  componentDidMount() {
    this.updateColorChanger();
  }
  componentDidUpdate() {
    this.updateColorChanger();
  }
  handleClick = (e) => {
    this.setState({
      colour: this.randomCSSColour()
    })   
    e.target.style.backgroundColor = this.state.colour
    e.target.classList.remove('bounce');
  }
  updateColorChanger = function(){
    document.getElementById('colour').firstChild.style.backgroundColor = this.state.colour
  }
  randomCSSColour = () => {
    const byte = () => Math.floor(Math.random() * 255);
    return `rgb(${byte()},${byte()},${byte()})`;
  }
  render() {
    return (
      <div className="App">
        <Bubble colour={this.state.colour}></Bubble>
        <Colour handleClick={this.handleClick}></Colour>
      </div>
    );
  }
}

export default App;