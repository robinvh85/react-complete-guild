import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {
  const [personState, setPersonsState] = useState({
    persons: [
      {name: 'VH1', age: 15},
      {name: 'VH2', age: 20}
    ],
  });

  const [otherState, setOtherState] = useState({
    other: "Other state"
  })

  const changeNewHandler = () => {
    setPersonsState({
      persons: [
        {name: 'VH11', age: 115},
        {name: 'VH21', age: 220}
      ]
    })
  };

  return (
    <div className="App">
      {console.log(personState, otherState)}
      <h1>Hello, I'm React App</h1>
      <button onClick={changeNewHandler}>Change new</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>Welcome</Person>
    </div>
  );

}

export default app;
