import React from 'react';

const Bubbles = ({bubbles, handleChange, bubbleClick}) => {
    const BubbleList =  bubbles.length ? bubbles.map(
        bubble => {
        return(
        <div key={bubble.id} className="bubble" style={{top: bubble.y + 'px',left: bubble.x + 'px'}}>
            <div style={{background: bubble.color}} onClick={bubbleClick}>
            <p>{bubble.content}</p>
            <input type="text" onChange={handleChange} id={bubble.id}/>
            </div>
        </div> 
        )
    }) : (
        <p className="message">Click somewhere then start typing</p>
    )
    
    return (
        <div>
            {BubbleList}
        </div>
    )
}
    
    export default Bubbles;