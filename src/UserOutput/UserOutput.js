import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
    return (
            <div className="UserOutput">
                <h3>User Output:</h3>
                <p>Hello! My name is <span><b>{props.username}</b></span>!</p>
                <p>I love to paint, read, and code!</p>
            </div>
    )
}

export default userOutput;