import React from 'react';

const person = (props) => {
  return (
    <div>
      <p>I'm {props.name} and I'm {props.age} year's old</p>
      {props.children && <p>- {props.children}</p>}
      <input 
        type="text" 
        value={props.name}
        onChange={props.changed}
        />
      <button onClick={props.deleteItem}>Delete</button>
    </div>
  )
}

export default person
