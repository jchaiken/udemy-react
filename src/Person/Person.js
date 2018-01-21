import React from 'react';

const person = (props) => {
    // return <p>I'm a person and I am X years old!</p>
    // return <p>I'm a person and I am Math.floor(Math.random() * 30) years old!</p>
    // return <p>I'm a person and I am {Math.floor(Math.random() * 30)} years old!</p>
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            {/* used to access info between open and close of person component tag in app.js */}
            <p>{props.children}</p>
        </div>
    )
}

export default person;