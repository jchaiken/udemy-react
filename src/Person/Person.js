import React from 'react';

import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            {/* used to access info between open and close of person component tag in app.js */}
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;