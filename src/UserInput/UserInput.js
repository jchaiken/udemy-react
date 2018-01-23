import React from 'react';

import './UserInput.css';

const userInput = (props) => {
    return (
        <div className="UserInput">
            <h3>User Input</h3>            
            <input type="text" onChange={props.changed} value={props.username} />
        </div>
    )
}

export default userInput;