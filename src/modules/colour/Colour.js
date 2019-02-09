import React from 'react';

const Colour = ({ handleClick}) => {
    
    return (
<div id="colour">
    <div onClick={handleClick} className="bounce"/>
</div>

    )
}

export default Colour;