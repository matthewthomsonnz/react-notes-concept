import React, { Component } from 'react';
import Bubbles from './modules/Bubbles';
class Bubble extends Component {
    state = {
        bubbles: []
    }
    handleChange = (e) => {
        let inputBubbleId = e.target.id
        let currentInputValue = e.target.value
        let prevBubblesState = [...this.state.bubbles]
        let activeBubble = this.state.bubbles.filter(bubble => {
        return bubble.id == inputBubbleId
        } )[0];
        activeBubble.content = currentInputValue;
        let inputUpdatedBubble = [activeBubble];
        let bubbles = prevBubblesState.map(eachPrevBubble => 
            inputUpdatedBubble.find(updatedBubble =>
                updatedBubble.id === eachPrevBubble.id
            ) || eachPrevBubble
        );
        this.setState({
            bubbles
        })    
    }
    
    componentDidUpdate(prevProps, prevState) {
        let inputBubbleId = prevState.bubbles
        let newBubbleId = this.state.bubbles;
        let after = this.state.bubbles.filter(bubble => {
            let temp = prevState.bubbles.find(function ({id}) {return this.id == id;}, bubble)
            if( temp == undefined) {
                return true
            }
        })[0];
        if(after !== undefined) {
            let newestInput = document.getElementById(after.id);
            newestInput.select();
            newestInput.parentNode.classList.add('grow');
        }
    }
    
    handleClick = (e) => {
        if (e.target.className == "bubbles") {
        let color = this.state.color;
        let bubble = {id: Math.random(), content:'', x:e.pageX, y:e.pageY, color:this.props.colour};
        let bubbles = [...this.state.bubbles, bubble];
        this.setState({
            bubbles
        })
        }
    }
    bubbleClick = (e) => {
        e.preventDefault()
        e.currentTarget.classList.remove("grow")
        let prevBubblesState = [...this.state.bubbles];
        let bubbles2 = prevBubblesState.filter(checkId);
        this.setState({
            bubbles:bubbles2
        })
        function checkId(id) {
            return id.id != e.target.lastChild.id
        }
    }
    
    render() {
        return (
        <div className="bubbles" onClick={this.handleClick}>
            <Bubbles bubbles={this.state.bubbles} handleChange={this.handleChange} bubbleClick={this.bubbleClick}/>
        </div>
        )
    }
}

 export default Bubble;