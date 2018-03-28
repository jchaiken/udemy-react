import React from 'react';
import Person from './Person/Person'

const persons = (props) => props.persons.map( (person, index) => {
        // the key has to be placed in the outer element in a map method
        return <Person
            click={() => props.clicked( index )}
            name={person.name}
            age={person.age}
            key={person.id}               
            changed={(event) => props.changed(event, person.id)} />          
      } );

export default persons;