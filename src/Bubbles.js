import React from 'react';

const Bubbles = ({bubbles, handleChange}) => {
    const BubbleList = bubbles.map(
        bubble => {
        return(
        <div key={bubble.id} className="bubble" style={{top: bubble.y + 'px',left: bubble.x + 'px'}}>
            <div style={{background: bubble.color}}>
            <p>{bubble.content}</p>
            <input type="text" onChange={handleChange} id={bubble.id}/>
            </div>
        </div> 
        )
    })
    
    return (
        <div>
            {BubbleList}
        </div>
    )
    }
    


    export default Bubbles;