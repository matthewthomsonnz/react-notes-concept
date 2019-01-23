import React from 'react';

const Colour = ({random, handleClick}) => {
    
    return (
        <div id="colour" onClick={handleClick} style={{random}}>
        </div>
    )
    }

export default Colour;