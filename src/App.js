import React, { Component } from 'react';
import './App.css';
import Bubble from './Bubble';
import Colour from './Colour';

class App extends Component {
  componentWillMount() {
    this.setState({
      colour: this.randomRGB()
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
      colour: this.randomRGB()
    })   
    e.target.style.background = this.state.colour
  }
  updateColorChanger = function(){
    document.getElementById('colour').style.background = this.state.colour
  }
  randomRGB = function(){
    var test = function() {return Math.floor(Math.random() * 255) + 0;}
    return "rgb("+test()+","+test()+","+test()+")"
  }
  render() {
    return (
      <div className="App">
        <Bubble colour={this.state.colour}></Bubble>
        <Colour random={this.randomRGB()} handleClick={this.handleClick}></Colour>
      </div>
    );
  }
}

export default App;