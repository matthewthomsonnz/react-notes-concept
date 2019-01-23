import React, { Component } from 'react';
import Bubbles from './Bubbles';
class Bubble extends Component {
    state = {
        color:{r:250,g:0,b:188},
        bubbles: [
        {id: 0.46591639466024026, content: "a", x: 188, y: 804},
        {id: 0.5064425877085477, content: "b", x: 1102, y: 453},
        {id: 0.50644253877085477, content: "b", x: 1102, y: 453}
        ]
    }
    handleChange = (e) => {
        var currentBubbleId = e.target.id
        var currentBubbleValue = e.target.value
        var arr1 = [...this.state.bubbles]
        var current = this.state.bubbles.filter(bubble => {
        return bubble.id == currentBubbleId
        } );
    
        current[0].content = currentBubbleValue;
        var arr2 = [current[0]];
    
        var bubbles = arr1.map(obj => arr2.find(o => o.id === obj.id) || obj);
       
        this.setState({
        bubbles
        })    
    }
    
    componentDidUpdate(prevProps, prevState) {
        var currentBubbleId = prevState.bubbles
        var newBubbleId = this.state.bubbles;
    
    var after = this.state.bubbles.filter(bubble => {
        var temp = prevState.bubbles.find(testFunc, bubble)
        if(undefined == temp) {return true}
        } );
        
        
    if(after[0] !== undefined) {var newestInput = document.getElementById(after[0].id);
    newestInput.select();
    newestInput.parentNode.classList.add('grow');}
    
    function testFunc(param) {
    return this.id == param.id
    }
    
    
        }
    
    handleClick = (e) => {
        var color = this.state.color;
        let bubble = {id: Math.random(), content:'', x:e.pageX, y:e.pageY, color:this.props.colour};
    
        let bubbles = [...this.state.bubbles, bubble];
    
        this.setState({
        bubbles
        })
    }
    
    render() {
        return (
        <div className="bubbles" onClick={this.handleClick}>
        <Bubbles bubbles={this.state.bubbles} handleChange={this.handleChange}></Bubbles>
        </div>
        )
    }
    }

    export default Bubble;